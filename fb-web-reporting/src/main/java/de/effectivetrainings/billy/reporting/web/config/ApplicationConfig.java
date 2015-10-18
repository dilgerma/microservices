package de.effectivetrainings.billy.reporting.web.config;

import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportRequest;
import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportingFacade;
import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportingMockFacade;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.*;
import org.springframework.web.context.WebApplicationContext;

import javax.servlet.http.HttpServletRequest;

@Configuration
public class ApplicationConfig {

    @Autowired
    private ReportRequest reportRequest;

    @Profile("!" + Profiles.MOCK)
    @Bean
    public ReportingFacade reportFacade() {
        return new ReportingFacade(reportRequest);
    }

    @Profile(Profiles.MOCK)
    @Bean
    public ReportingMockFacade reportingMockFacade() {
        return new ReportingMockFacade();
    }

    @Bean
    @Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.INTERFACES)
    public CorrelationId correlationId(HttpServletRequest servletRequest) {
        return new DefaultCorrelationId(servletRequest.getHeader(CorrelationId.CORRELATION_ID_HEADER_KEY));
    }
}
