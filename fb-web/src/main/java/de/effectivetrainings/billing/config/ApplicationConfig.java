package de.effectivetrainings.billing.config;

import de.effectivetrainings.billing.rest.SimpleCORSFilter;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.context.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 *
 */
@Import(MetricsConfig.class)
@Configuration
public class ApplicationConfig {

    @Bean
    @UserRestTemplate
    public RestTemplate userRestTemplate(CorrelationIdInterceptor correlationIdInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor, LoadBalancerInterceptor loadBalancerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor, restRequestTimerInterceptor, loadBalancerInterceptor));
        return restTemplate;
    }

    @Bean
    @SystemRequestTemplate
    public RestTemplate systemRestTemplate(LoadBalancerInterceptor loadBalancerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(loadBalancerInterceptor));
        return restTemplate;
    }

    @Bean
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    public RestRequestTimerInterceptor restRequestTimerInterceptor(MetricsProvider metricsProvider) {
        return new RestRequestTimerInterceptor(metricsProvider);
    }

    @Bean
    public ServicesConfig servicesConfig(@Value("${fb.invoices.uri}") String invoiceServiceUri, @Value("${fb.expenses.uri}") String expenseServiceUri, @Value("${fb.customers.uri}") String customerServiceUri, @Value("${fb.templates.uri}") String templateServieUri) {
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
}
