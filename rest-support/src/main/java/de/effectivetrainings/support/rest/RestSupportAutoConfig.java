package de.effectivetrainings.support.rest;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.support.rest.correlation.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.nag.SlowDownRestInterceptor;
import de.effectivetrainings.support.rest.resilience.RetryableRibbonLoadBalancerClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@ConditionalOnBean(RestTemplate.class)
@Configuration
@Slf4j
public class RestSupportAutoConfig {

    @Autowired(required = false)
    @UserRestTemplate
    private RestTemplate userRestTemplate;

    @Autowired(required = false)
    private CorrelationIdInterceptor correlationIdInterceptor;

    @Autowired(required = false)
    private SlowDownRestInterceptor slowDownRestInterceptor;

    @ConditionalOnBean(CorrelationId.class)
    @Bean
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    @ConditionalOnProperty(value = "rest.nagging.enabled", matchIfMissing = true)
    public SlowDownRestInterceptor slowDownRestInterceptor(MetricRegistry metricRegistry) {
        return new SlowDownRestInterceptor(metricRegistry);
    }

    @Bean
    @ConditionalOnProperty(value = "rest.client.retries", matchIfMissing = false)
    public RetryableRibbonLoadBalancerClient loadBalancerClient(@Value("${rest.client.retries}") int maxRetries, SpringClientFactory springClientFactory) {
        return new RetryableRibbonLoadBalancerClient(maxRetries, springClientFactory);
    }

    @PostConstruct
    public void initialize() {
        if(userRestTemplate != null) {
            List<ClientHttpRequestInterceptor> interceptors = new ArrayList<>();
            if(correlationIdInterceptor != null) {
                log.info("registering correlation id interceptor");
                interceptors.add(correlationIdInterceptor);
            }
            if(slowDownRestInterceptor != null) {
                log.info("registering nag - slow down interceptor");
                interceptors.add(slowDownRestInterceptor);
            }

            List<ClientHttpRequestInterceptor> availableInterceptors = new ArrayList<>(userRestTemplate.getInterceptors());
            availableInterceptors.addAll(interceptors);
            userRestTemplate.setInterceptors(availableInterceptors);
        }
    }
}
