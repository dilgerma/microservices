package de.effectivetrainings.fastbill.config;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.RestSupportAutoConfig;
import de.effectivetrainings.support.rest.correlation.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 *
 */
@Configuration
@Import(RestSupportAutoConfig.class)
public class RestConfig {

    @Bean
    @UserRestTemplate
    public RestTemplate restTemplate(RestRequestTimerInterceptor restRequestTimerInterceptor, LoadBalancerInterceptor loadBalancerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor, loadBalancerInterceptor));
        return restTemplate;
    }

    /**
     * system request template - no interceptors that rely on an active request initiated by a customer
     */
    @Bean
    @SystemRequestTemplate
    public RestTemplate systemRestTemplate(LoadBalancerInterceptor loadBalancerInterceptor) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(loadBalancerInterceptor));
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
