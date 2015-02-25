package de.effectivetrainings.billing.config;

import de.effectivetrainings.billing.rest.CorrelationIdInterceptor;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import org.springframework.beans.factory.annotation.Value;
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
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor, restRequestTimerInterceptor));
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
    public ServicesConfig servicesConfig(@Value("${invoiceservice.uri}") String invoiceServiceUri, @Value("${expenseservice.uri}") String expenseServiceUri, @Value("${customerservice.uri}") String customerServiceUri) {
        return new ServicesConfig(invoiceServiceUri, expenseServiceUri, customerServiceUri);
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
}
