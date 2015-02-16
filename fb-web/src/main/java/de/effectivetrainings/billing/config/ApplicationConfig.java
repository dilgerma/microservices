package de.effectivetrainings.billing.config;

import de.effectivetrainings.billing.rest.CorrelationIdInterceptor;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 *
 */
@Configuration
public class ApplicationConfig {

    @Bean
    public RestTemplate restTemplate(CorrelationIdInterceptor correlationIdInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(correlationIdInterceptor));
        return restTemplate;
    }

    @Bean
    public CorrelationIdInterceptor correlationIdInterceptor(CorrelationId correlationId) {
        return new CorrelationIdInterceptor(correlationId);
    }

    @Bean
    public ServicesConfig servicesConfig(@Value("${invoiceservice.uri}") String invoiceServiceUri, @Value("${expenseservice.uri}") String expenseServiceUri) {
        return new ServicesConfig(invoiceServiceUri, expenseServiceUri);
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
