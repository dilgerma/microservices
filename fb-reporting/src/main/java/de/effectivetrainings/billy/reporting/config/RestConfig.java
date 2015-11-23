package de.effectivetrainings.billy.reporting.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import de.effectivetrainings.billy.reporting.rest.ReportingResource;
import de.effectivetrainings.billy.reporting.rest.inbound.ReportingInboundModelMapper;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
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

    @Autowired
    private CorrelationId correlationId;

    @Autowired
    private IncomeReportRepository incomeReportRepository;

    @Autowired
    private LoadBalancerInterceptor loadBalancerInterceptor;

    @Bean
    @Qualifier("userRestTemplate")
    public RestOperations restTemplate() {
        final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor(), loadBalancerInterceptor));
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
    public ReportingInboundModelMapper inboundModelMapper() {
        return new ReportingInboundModelMapper();
    }

    @Bean
    public ReportingResource reportingResource() {
        return new ReportingResource(incomeReportRepository);
    }
}
