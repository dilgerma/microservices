package de.effectivetrainings.billy.expenses.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.billy.expenses.rest.ExpenseResource;
import de.effectivetrainings.billy.expenses.rest.inbound.FbExpenseInboundModelMapper;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
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
    @Qualifier("restClientHttpFactory")
    private ClientHttpRequestFactory clientHttpRequestFactory;

    @Autowired
    private SpringClientFactory springClientFactory;

    @Autowired
    private MetricRegistry metricsRegistry;

    @Value("${rest.client.connectionTimeout:-1}")
    private Integer connectionTimeout;

    @Value("${rest.client.readTimeout:-1}")
    private Integer readTimeout;

    @Value("${fb.repository.expenses}")
    private String expenseUri;

    @Autowired
    private CorrelationId correlationId;

    @Bean
    @Qualifier("userRestTemplate")
    public RestOperations restTemplate() {
        final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor()));
        return restTemplate;
    }

    @Bean
    public RestRequestTimerInterceptor restRequestTimerInterceptor() {
        return new RestRequestTimerInterceptor(metricsRegistry);
    }


    @Bean(name = "restClientHttpFactory")
    public ClientHttpRequestFactory clientHttpRequestFactory() {
        final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
//        simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
//        simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
        return simpleClientHttpRequestFactory;
    }

    @Bean
    public ExpenseResource expenseResource() {
        return new ExpenseResource(expenseUri, restTemplate(), correlationId, inboundModelMapper());
    }

    @Bean
    public FbExpenseInboundModelMapper inboundModelMapper() {
        return new FbExpenseInboundModelMapper();
    }
}
