package de.effectivetrainings.billy.reporting;

import de.effectivetrainings.billy.billing.config.MetricsConfig;
import de.effectivetrainings.billy.reporting.config.RestConfig;
import de.effectivetrainings.billy.reporting.config.ServiceConfig;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.influx.EnableInflux;
import de.effectivetrainings.support.rest.EnableRestSupport;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
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
@ComponentScan(basePackages = "de.effectivetrainings.billy.reporting.rest")
@EnableEurekaClient
@EnableRestSupport
@EnableInflux
@Import({RestConfig.class, MetricsConfig.class, ServiceConfig.class})
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
