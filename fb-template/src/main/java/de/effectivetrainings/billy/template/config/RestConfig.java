package de.effectivetrainings.billy.template.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import java.util.Arrays;

/**
 *
 */
@Configuration
@Slf4j
public class RestConfig {
    @Value("${rest.client.connectionTimeout:-1}")
    private Integer connectionTimeout;
    @Value("${rest.client.readTimeout:-1}")
    private Integer readTimeout;

    @Autowired
    private MetricRegistry metricRegistry;

    @Autowired
    private LoadBalancerInterceptor loadBalancerInterceptor;

    @Bean
    public RestRequestTimerInterceptor requestTimer() {
        return new RestRequestTimerInterceptor(metricRegistry);
    }

    @Bean
    @Qualifier("userRestTemplate")
    public RestOperations restTemplate() {
        final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory());
        restTemplate.setInterceptors(Arrays.asList(requestTimer(), loadBalancerInterceptor));
        return restTemplate;
    }


    @Bean(name = "multipartResolver")
    public MultipartResolver multipartResolver() {
        return new CommonsMultipartResolver();
    }

    @Bean(name = "restClientHttpFactory")
       public ClientHttpRequestFactory clientHttpRequestFactory() {
           final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
//           simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
//           simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
           return simpleClientHttpRequestFactory;
       }
}
