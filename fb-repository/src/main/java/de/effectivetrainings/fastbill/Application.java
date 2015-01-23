package de.effectivetrainings.fastbill;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
@EnableWebMvc
public class Application
{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public RestTemplate restTemplate()
    {
        return new RestTemplate();
    }

    @Bean
    public FastbillUserData userData() {
        return new FastbillUserData("email", "4711");
    }

    @Bean
    public FastbillRepository fastbillRepository() {
        return new FastbillRepository(restTemplate(), userData());
    }
}
