package de.effectivetrainings.billy.auth;

import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.health.HealthCheckRegistry;
import de.effectivetrainings.billy.auth.registration.infrastructure.AuthUserDetailsService;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationRepository;
import de.effectivetrainings.billy.auth.registration.service.RegistrationService;
import de.effectivetrainings.billy.auth.registration.service.RegistrationServiceImpl;
import de.effectivetrainings.support.events.api.EventEmitter;
import de.effectivetrainings.support.events.api.EventsExchangeQualifier;
import de.effectivetrainings.support.events.config.MessagingConnectionConfig;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.ManagementServerProperties;
import org.springframework.boot.actuate.metrics.dropwizard.DropwizardMetricServices;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.*;
import org.springframework.core.annotation.Order;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.DefaultAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.net.URI;
import java.security.KeyPair;

@Configuration
@ComponentScan
@EnableAutoConfiguration
@Controller
@SessionAttributes("authorizationRequest")
@PropertySource("classpath:messages.properties")
@EnableEurekaClient
@Import(MessagingConnectionConfig.class)
public class AuthserverApplication extends WebMvcConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(AuthserverApplication.class, args);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/login").setViewName("login");
		registry.addViewController("/oauth/confirm_access").setViewName("authorize");
	}

	@Configuration
	protected static class ApplicationConfig {

		@Autowired
		private CustomerRegistrationRepository customerRegistrationRepository;

		@Autowired
		private EventEmitter eventEmitter;

		@Bean
		public AuthUserDetailsService authUserDetailsService() {
			return new AuthUserDetailsService(customerRegistrationRepository);
		}

		@Bean
		public RegistrationService registrationService() {
			return new RegistrationServiceImpl(customerRegistrationRepository, eventEmitter);
		}

	}

	@Configuration
	@Import(MessagingConnectionConfig.class)
	public static class EventsConfig {

		@Value("${events.queue.name}")
		private String eventsQueueName;

		@EventsExchangeQualifier
		@Autowired
		private FanoutExchange eventsExchange;

		@Bean
		public Queue eventsQueue() {
			return new Queue(eventsQueueName, true, false, true);
		}

		@Bean
		public Binding binding() {
			return BindingBuilder.bind(eventsQueue()).to(eventsExchange);
		}
	}

	@Configuration
	@Order(ManagementServerProperties.ACCESS_OVERRIDE_ORDER)
	protected static class LoginConfig extends WebSecurityConfigurerAdapter {

		@Autowired
		private AuthenticationManager authenticationManager;

		@Autowired
		private AuthUserDetailsService authUserDetailsService;

		@Override
		public void init(WebSecurity web) throws Exception {
			super.init(web);
			web.ignoring().antMatchers("/register/**", "/");
		}

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.csrf().disable();
			http.formLogin().loginPage("/login").permitAll()
					.and().authorizeRequests()
					.anyRequest().authenticated();
		}

		@Override
		protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//			auth.inMemoryAuthentication().withUser("user").password("secret2").authorities("USER");
			auth.userDetailsService(authUserDetailsService);
		}
	}

	@Configuration
	@EnableAuthorizationServer
//	@EnableResourceServer
	protected static class OAuth2Config extends AuthorizationServerConfigurerAdapter {

		@Autowired
		private AuthenticationManager authenticationManager;

		@Autowired
		private RedisConnectionFactory redisConnectionFactory;

//		@Bean
//		public JwtAccessTokenConverter jwtAccessTokenConverter() {
//			JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
//			KeyPair keyPair = new KeyStoreKeyFactory(
//					new ClassPathResource("keystore.jks"), "foobar".toCharArray())
//					.getKeyPair("test");
//			converter.setKeyPair(keyPair);
//			return converter;
//		}


		@Override
		public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
			clients.inMemory()
					.withClient("client")
					.secret("secret")
					.autoApprove(true)
					.authorizedGrantTypes("authorization_code", "implicit", "refresh_token", "client_credentials")
					.scopes("services");
		}

		@Override
		public void configure(AuthorizationServerEndpointsConfigurer endpoints)
				throws Exception {
			endpoints.authenticationManager(authenticationManager).accessTokenConverter(
					new DefaultAccessTokenConverter()).approvalStoreDisabled().tokenStore(new RedisTokenStore(redisConnectionFactory));
		}

		@Override
		public void configure(AuthorizationServerSecurityConfigurer oauthServer)
				throws Exception {
			oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess(
					"permitAll()");
		}
	}

	@Configuration
	protected static class MetricsConfig {

	    @Autowired
	    private MetricRegistry metricRegistry;

	    @Bean
	    public HealthCheckRegistry healthChecks() {
	        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
	        return healthCheckRegistry;
	    }


	    //just here to prevent duplciate bean exceptions (with HystrixMetricsPollerConfiguration)
	    @Bean
	    @Primary
	    public DropwizardMetricServices dropwizardMetricServices() {
	        return new DropwizardMetricServices(metricRegistry);
	    }

	}

}