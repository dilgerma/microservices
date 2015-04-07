package de.effectivetrainings.billy.ui.config;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.resilience.RetryableRibbonLoadBalancerClient;
import de.effectivetrainings.billy.ui.rest.SimpleCORSFilter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;

/**
 *
 */
@Import({MetricsConfig.class})
@Configuration
@Slf4j
public class ApplicationConfig {

    @Bean
    @UserRestTemplate
    public RestTemplate userRestTemplate(RestRequestTimerInterceptor restRequestTimerInterceptor, LoadBalancerInterceptor loadBalancerInterceptor) {
        final RestTemplate restTemplate = new RestTemplate();
        restTemplate.setInterceptors(Arrays.asList(restRequestTimerInterceptor, loadBalancerInterceptor));
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
    public RestRequestTimerInterceptor restRequestTimerInterceptor(MetricRegistry registry) {
        return new RestRequestTimerInterceptor(registry);
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

    @Bean
       @ConditionalOnProperty(value = "rest.client.retries", matchIfMissing = false)
       public RetryableRibbonLoadBalancerClient loadBalancerClient(@Value("${rest.client.retries}") int maxRetries, SpringClientFactory springClientFactory) {
           log.info("Building Retryable Ribbon Loadbalancer. {} Retries configured", maxRetries);
           return new RetryableRibbonLoadBalancerClient(maxRetries, springClientFactory);
       }
}
