package de.effectivetrainings.support.rest;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.support.rest.correlation.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.nag.SlowDownRestInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
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

    @Bean
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    @ConditionalOnProperty(value = "rest.nagging.enabled", matchIfMissing = false)
    public SlowDownRestInterceptor slowDownRestInterceptor(MetricRegistry metricRegistry) {
        return new SlowDownRestInterceptor(metricRegistry);
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
