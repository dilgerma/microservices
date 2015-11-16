package de.effectivetrainings.billy.billing;

import de.effectivetrainings.billy.billing.config.MetricsConfig;
import de.effectivetrainings.billy.billing.config.OAuth2Config;
import de.effectivetrainings.billy.billing.config.RestConfig;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.influx.EnableInflux;
import de.effectivetrainings.support.rest.EnableRestSupport;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.context.annotation.*;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@EnableWebMvc
@ComponentScan(basePackages = "de.effectivetrainings.billy.billing.rest")
@EnableEurekaClient
@EnableRestSupport
@EnableInflux
@EnableCircuitBreaker
@EnableHystrixDashboard
@Import({RestConfig.class, MetricsConfig.class, OAuth2Config.class})
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
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
