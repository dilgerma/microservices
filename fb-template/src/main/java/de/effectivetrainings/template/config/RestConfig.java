package de.effectivetrainings.template.config;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.CorrelationIdInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

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
        return new RestRequestTimerInterceptor(metricsProvider);
    }

    @Bean
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor, restRequestTimerInterceptor));
        return restTemplate;
    }

    @Bean(name = "multipartResolver")
    public MultipartResolver multipartResolver() {
        return new CommonsMultipartResolver();
    }
}
