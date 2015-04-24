package de.effectivetrainings.billy.template.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import de.effectivetrainings.support.rest.UserRestTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
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

    @Bean
    public RestRequestTimerInterceptor requestTimer(MetricRegistry registry) {
        return new RestRequestTimerInterceptor(registry);
    }

    @Bean
    @UserRestTemplate
    public RestTemplate restTemplate(@Qualifier("restClientHttpFactory") ClientHttpRequestFactory clientHttpRequestFactory, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor));
        return restTemplate;
    }

    @Bean
    @SystemRequestTemplate
    public RestTemplate systemRestTemplate(RestRequestTimerInterceptor restRequestTimerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor));
        return restTemplate;
    }


    @Bean(name = "multipartResolver")
    public MultipartResolver multipartResolver() {
        return new CommonsMultipartResolver();
    }

    @Bean(name = "restClientHttpFactory")
       public ClientHttpRequestFactory clientHttpRequestFactory(@Value("${rest.client.connectionTimeout:-1}") Integer connectionTimeout, @Value("${rest.client.readTimeout:-1}") Integer readTimeout) {
           final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
           simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
           simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
           return simpleClientHttpRequestFactory;
       }
}
