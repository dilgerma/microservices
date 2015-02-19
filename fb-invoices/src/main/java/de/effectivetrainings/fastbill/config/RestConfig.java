package de.effectivetrainings.fastbill.config;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.fastbill.rest.CorrelationIdInterceptor;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
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
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    public RestRequestTimerInterceptor requestTimer(MetricsProvider metricsProvider) {
        //TODO dilgerm - fix magic string
        return new RestRequestTimerInterceptor("invoices", metricsProvider);
    }

    @Bean
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor, restRequestTimerInterceptor));
        return restTemplate;
    }
}
