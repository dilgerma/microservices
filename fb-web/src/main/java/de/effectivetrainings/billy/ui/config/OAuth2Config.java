package de.effectivetrainings.billy.ui.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.AuthorizationServerTokenServices;
import org.springframework.security.oauth2.provider.token.DefaultTokenServices;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class OAuth2Config {

    @Autowired
    private OAuth2ClientContext clientContext;

    @Autowired
    private MetricRegistry metricRegistry;

    @Autowired
    private OAuth2ProtectedResourceDetails oAuth2ProtectedResourceDetails;

    @Autowired
    private LoadBalancerInterceptor loadBalancerInterceptor;


    @Bean
    @Qualifier("oAuth2RestOperations")
    public OAuth2RestOperations oAuth2RestOperations() {
        final OAuth2RestTemplate oAuth2RestTemplate = new OAuth2RestTemplate(oAuth2ProtectedResourceDetails,
                clientContext);
        oAuth2RestTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor(), loadBalancerInterceptor));
        return oAuth2RestTemplate;
    }

    @Bean
    public RestRequestTimerInterceptor restRequestTimerInterceptor() {
        return new RestRequestTimerInterceptor(metricRegistry);
    }

//    @Bean
//    @Primary
//    public static AuthorizationServerTokenServices authorizationServerTokenServices(RedisConnectionFactory redisConnectionFactory) {
//        final DefaultTokenServices defaultTokenServices = new DefaultTokenServices();
//        defaultTokenServices.setTokenStore(tokenStore(redisConnectionFactory));
//        return defaultTokenServices;
//    }

    @Bean
    public static TokenStore tokenStore(RedisConnectionFactory redisConnectionFactory) {
        return new RedisTokenStore(redisConnectionFactory);
    }
}
