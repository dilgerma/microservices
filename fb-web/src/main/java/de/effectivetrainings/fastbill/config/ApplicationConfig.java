package de.effectivetrainings.fastbill.config;

import de.effectivetrainings.fastbill.rest.ServicesConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 *
 */
@Configuration
public class ApplicationConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public ServicesConfig servicesConfig() {
        return new ServicesConfig(null);
    }
}
