package de.effectivetrainings.billy.ui.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.metrics.dropwizard.DropwizardMetricServices;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.cloud.netflix.zuul.filters.route.RestClientRibbonCommandFactory;
import org.springframework.context.annotation.*;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;

/**
 *
 */
@Configuration
@Slf4j
public class ApplicationConfig {
    @Value("${rest.client.connectionTimeout:-1}") private Integer connectionTimeout;
    @Value("${rest.client.readTimeout:-1}") private Integer readTimeout;

    @Autowired
    private MetricRegistry registry;

    @Autowired
    @Qualifier(value = "oAuth2RestOperations")
    private OAuth2RestOperations restTemplate;

    @Autowired
    @MessagingTemplate
    private AmqpTemplate amqpTemplate;

    @Autowired
    private SpringClientFactory springClientFactory;


    @Bean
    public Filter correlationIdFilter() {
        return new CorrelationIdFilter();
    }

    @Bean
    @Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.INTERFACES)
    public CorrelationId correlationId(HttpServletRequest servletRequest) {
        return new DefaultCorrelationId(servletRequest.getHeader(CorrelationId.CORRELATION_ID_HEADER_KEY));
    }

    @Bean
    public RestClientRibbonCommandFactory restClientRibbonCommandFactory() {
        return new RestClientRibbonCommandFactory(springClientFactory);
    }


    @Bean(name = "restClientHttpFactory")
    public ClientHttpRequestFactory clientHttpRequestFactory() {
        final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
//        simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
//        simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
        return simpleClientHttpRequestFactory;
    }

    //just here to prevent duplciate bean exceptions (with HystrixMetricsPollerConfiguration)
     @Bean
     @Primary
     public DropwizardMetricServices dropwizardMetricServices() {
         return new DropwizardMetricServices(registry);
     }

}
