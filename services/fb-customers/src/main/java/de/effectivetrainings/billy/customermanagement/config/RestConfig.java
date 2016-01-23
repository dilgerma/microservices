package de.effectivetrainings.billy.customermanagement.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.billy.customermanagement.rest.CustomerResource;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 *
 */
@Configuration
@Slf4j
public class RestConfig {

    @Autowired
    private MetricRegistry metricRegistry;

    @Autowired
    private LoadBalancerClient loadBalancerClient;

    @Value("${rest.client.connectionTimeout:-1}")
    private Integer connectionTimeout;

    @Value("${rest.client.readTimeout:-1}")
    private Integer readTimeout;

    @Value("${fb.repository.customer}")
    private String customerUri;

    @Autowired
    private LoadBalancerInterceptor loadBalancerInterceptor;

    @Bean
    public RestRequestTimerInterceptor requestTimer() {
        return new RestRequestTimerInterceptor(metricRegistry);
    }

    /**
     * Template that does report correlation id information, as this template should be used for requests
     * initiated by human.
     */
    @Bean
    @Qualifier("userRestTemplate")
    public RestOperations restTemplate() {
        final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory());
        restTemplate.setInterceptors(Arrays.asList(requestTimer(), loadBalancerInterceptor));
        return restTemplate;
    }

    @Bean(name = "restClientHttpFactory")
    public ClientHttpRequestFactory clientHttpRequestFactory() {
        final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
        simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
        simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
        return simpleClientHttpRequestFactory;
    }

    @Bean
    public CustomerResource customerResource() {
        return new CustomerResource(customerUri, restTemplate());
    }
}
