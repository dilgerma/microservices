package de.effectivetrainings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

@SpringBootApplication
@EnableOAuth2Client
public class Oauth2ClientApplication {

    @Autowired
    private OAuth2ClientContext clientContext;

    @Bean
    public OAuth2RestOperations oAuth2RestOperations() {
        return new OAuth2RestTemplate(oAuth2ProtectedResourceDetails(), clientContext);
    }

    @Bean
    @ConfigurationProperties("oauth2.client.*")
    public OAuth2ProtectedResourceDetails oAuth2ProtectedResourceDetails() {
        return new AuthorizationCodeResourceDetails();
    }

    public static void main(String[] args) {
        SpringApplication.run(Oauth2ClientApplication.class, args);
    }


}
