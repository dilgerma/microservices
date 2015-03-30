package de.effectivetrainings.fastbill.config;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.CorrelationIdInterceptor;
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
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    public RestRequestTimerInterceptor requestTimer(MetricsProvider metricsProvider) {
        return new RestRequestTimerInterceptor(metricsProvider);
    }

    /**
     * Template that does report correlation id information, as this template should be used for requests
     * initiated by human.
     */
    @UserRestTemplate
    @Bean
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor, LoadBalancerInterceptor loadBalancerInterceptor) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor, restRequestTimerInterceptor, loadBalancerInterceptor));
        return restTemplate;

    }

    /**
     * Template that does not report correlation id information, as this template should be used for requests
     * that are done by the system (health checks etc..)
     */
    @SystemRequestTemplate
    @Bean
    public RestTemplate systemRequestTemplate(LoadBalancerInterceptor loadBalancerInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getInterceptors().add(loadBalancerInterceptor);
        restTemplate.getInterceptors().add(restRequestTimerInterceptor);
        return restTemplate;
    }


}
