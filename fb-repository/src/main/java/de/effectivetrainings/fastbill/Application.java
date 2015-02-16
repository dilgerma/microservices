package de.effectivetrainings.fastbill;

import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.fastbill.config.RestConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
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
@ComponentScan
@EnableWebMvc
@Import(RestConfig.class)
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public FastbillUserData userData(@Value("${user.email}") String email, @Value("${user.apiKey}") String apiKey) {
        return new FastbillUserData(email, apiKey);
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
