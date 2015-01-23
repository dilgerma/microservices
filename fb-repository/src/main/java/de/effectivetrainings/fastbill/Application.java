package de.effectivetrainings.fastbill;

import de.effectivetrainings.fastbill.config.RestConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
@EnableWebMvc
@Import(RestConfig.class)
public class Application
{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public FastbillUserData userData(@Value("${user.email}") String email, @Value("${user.apiKey}") String apiKey) {
        return new FastbillUserData(email, apiKey);
    }
}
