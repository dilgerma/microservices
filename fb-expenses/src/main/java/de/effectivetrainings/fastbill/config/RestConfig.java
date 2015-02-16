package de.effectivetrainings.fastbill.config;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.fastbill.rest.CorrelationIdInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 *
 */
@Configuration
public class RestConfig {

    @Bean
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor)
    {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor));
        return restTemplate;
    }

    @Bean
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }
}
