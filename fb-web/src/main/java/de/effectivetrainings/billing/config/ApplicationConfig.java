package de.effectivetrainings.billing.config;

import org.springframework.beans.factory.annotation.Value;
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
    public ServicesConfig servicesConfig(@Value("${invoiceservice.uri}") String invoiceServiceUri, @Value("${expenseservice.uri}") String expenseServiceUri) {
        return new ServicesConfig(invoiceServiceUri, expenseServiceUri);
    }
}
