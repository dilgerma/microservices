package de.effectivetrainings.fastbill.config;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.fastbill.rest.CorrelationIdInterceptor;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
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
    @UserRestTemplate
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor, LoadBalancerInterceptor loadBalancerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor, restRequestTimerInterceptor, loadBalancerInterceptor));
        return restTemplate;
    }

    /**
     * system request template - no interceptors that rely on an active request initiated by a customer
     */
    @Bean
    @SystemRequestTemplate
    public RestTemplate systemRestTemplate(LoadBalancerInterceptor loadBalancerInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(loadBalancerInterceptor, restRequestTimerInterceptor));
        return restTemplate;
    }

    @Bean
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    public RestRequestTimerInterceptor restRequestTimerInterceptor(MetricsProvider metricsProvider) {
        return new RestRequestTimerInterceptor(metricsProvider);
    }
}
