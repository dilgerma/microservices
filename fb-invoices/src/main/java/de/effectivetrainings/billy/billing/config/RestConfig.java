package de.effectivetrainings.billy.billing.config;

import com.codahale.metrics.MetricRegistry;
import com.netflix.discovery.converters.Auto;
import de.effectivetrainings.billy.billing.rest.InvoiceResource;
import de.effectivetrainings.billy.billing.rest.inbound.FbInboundModelMapper;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.cloud.netflix.ribbon.RibbonLoadBalancerClient;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;

/**
 *
 */
@Configuration
@Slf4j
public class RestConfig {

    @Value("${rest.client.retries}")
    private int maxRetries;

    @Autowired
    private SpringClientFactory springClientFactory;

    @Autowired
    private MetricRegistry metricRegistry;

    @Autowired
    @Qualifier("restClientHttpFactory")
    private ClientHttpRequestFactory clientHttpRequestFactory;

    @Value("${rest.client.connectionTimeout:-1}")
    private Integer connectionTimeout;

    @Value("${rest.client.readTimeout:-1}")
    private Integer readTimeout;

    @Autowired
    private LoadBalancerInterceptor loadBalancerInterceptor;

    @Bean(name = "user")
    public RestTemplate restTemplate() {
        final RestTemplate restTemplate = new RestTemplate(clientHttpRequestFactory);
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor(),
                loadBalancerInterceptor));
        return restTemplate;
    }

    @Bean
    public RestRequestTimerInterceptor restRequestTimerInterceptor() {
        return new RestRequestTimerInterceptor(metricRegistry);
    }

    @Bean(name = "restClientHttpFactory")
    public ClientHttpRequestFactory clientHttpRequestFactory() {
        final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
//        simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
//        simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
        return simpleClientHttpRequestFactory;
    }

    @Bean
    public FbInboundModelMapper inboundModelMapper() {
        return new FbInboundModelMapper();
    }

    @Bean
    public InvoiceResource invoiceResource() {
        return new InvoiceResource("", new RestTemplate(), new FbInboundModelMapper(), new DefaultCorrelationId("1"));
    }
}
