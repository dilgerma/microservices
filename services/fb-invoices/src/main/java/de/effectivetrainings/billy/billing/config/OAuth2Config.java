//package de.effectivetrainings.billy.billing.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.redis.connection.RedisConnectionFactory;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
//import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
//import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
//import org.springframework.security.oauth2.provider.token.store.redis.RedisTokenStore;
//
//@Configuration
//@EnableResourceServer
//@EnableWebSecurity
//public class OAuth2Config extends ResourceServerConfigurerAdapter {
//
//    @Autowired
//    private RedisConnectionFactory redisConnectionFactory;
//
//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        super.configure(http);
//        http.requestMatchers().antMatchers("/*").and().authorizeRequests()
//                .anyRequest().authenticated();
//    }
//
//    @Override
//    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
//        super.configure(resources);
//        resources.resourceId("invoices");
//        resources.tokenStore(new RedisTokenStore(redisConnectionFactory));
//    }
//}
