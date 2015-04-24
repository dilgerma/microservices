package de.effectivetrainings.billy.customermanagement.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.resilience.RetryableRibbonLoadBalancerClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 *
 */
@Configuration
@Slf4j
public class RestConfig {

    @Bean
    public RestRequestTimerInterceptor requestTimer(MetricRegistry registry) {
        return new RestRequestTimerInterceptor(registry);
    }

    /**
     * Template that does report correlation id information, as this template should be used for requests
     * initiated by human.
     */
    @Bean
        @UserRestTemplate
        public RestTemplate restTemplate(@Qualifier("restClientHttpFactory") ClientHttpRequestFactory clientHttpRequestFactory, RestRequestTimerInterceptor restRequestTimerInterceptor, LoadBalancerInterceptor loadBalancerInterceptor) {
            final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
            restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor, loadBalancerInterceptor));
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

    @Bean
       @ConditionalOnProperty(value = "rest.client.retries", matchIfMissing = false)
       public RetryableRibbonLoadBalancerClient loadBalancerClient(@Value("${rest.client.retries}") int maxRetries, SpringClientFactory springClientFactory, MetricRegistry metricRegistry) {
           log.info("Building Retryable Ribbon Loadbalancer. {} Retries configured", maxRetries);
           return new RetryableRibbonLoadBalancerClient(maxRetries, springClientFactory, metricRegistry);
       }

    @Bean(name = "restClientHttpFactory")
    public ClientHttpRequestFactory clientHttpRequestFactory(@Value("${rest.client.connectionTimeout:-1}") Integer connectionTimeout, @Value("${rest.client.readTimeout:-1}") Integer readTimeout) {
        final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
        simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
        simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
        return simpleClientHttpRequestFactory;
    }
}
