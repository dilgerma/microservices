package de.effectivetrainings.billy.ui.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.billy.ui.facade.mock.FbFacadeImpl;
import de.effectivetrainings.billy.ui.facade.mock.FbMockFacade;
import de.effectivetrainings.billy.ui.profiles.Profiles;
import de.effectivetrainings.billy.ui.rest.FbFacade;
import de.effectivetrainings.billy.ui.rest.SimpleCORSFilter;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.*;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 *
 */
@Configuration
@Slf4j
public class ApplicationConfig {

    @Value("${fb.invoices.uri}") private String invoiceServiceUri;
    @Value("${fb.expenses.uri}") private String expenseServiceUri;
    @Value("${fb.customers.uri}") private String customerServiceUri;
    @Value("${fb.templates.uri}") private String templateServieUri;
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

    @Bean
    @Profile(value = {Profiles.MOCK, Profiles.PROD})
    public FbFacade fbFacade() {
        return new FbFacadeImpl(amqpTemplate, servicesConfig(), restTemplate);
    }

    @Bean
    @Profile(value = Profiles.UI_DEV)
    @ConditionalOnBean(value = FbFacade.class)
    public FbFacade fbFacadeMock() {
        return new FbMockFacade();
    }




    @Bean
    public ServicesConfig servicesConfig() {
        return new ServicesConfig(invoiceServiceUri, expenseServiceUri, customerServiceUri, templateServieUri);
    }

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
    public SimpleCORSFilter corsFilter() {
        return new SimpleCORSFilter();
    }


    @Bean(name = "restClientHttpFactory")
    public ClientHttpRequestFactory clientHttpRequestFactory() {
        final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
//        simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
//        simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
        return simpleClientHttpRequestFactory;
    }


}
