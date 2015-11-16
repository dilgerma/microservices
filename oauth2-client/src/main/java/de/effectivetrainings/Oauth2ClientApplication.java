package de.effectivetrainings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.security.oauth2.sso.EnableOAuth2Sso;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;

@EnableOAuth2Sso
@SpringBootApplication
public class Oauth2ClientApplication {

    @Autowired
    private OAuth2RestTemplate restTemplate;


    public static void main(String[] args) {
        SpringApplication.run(Oauth2ClientApplication.class, args);
    }
}
