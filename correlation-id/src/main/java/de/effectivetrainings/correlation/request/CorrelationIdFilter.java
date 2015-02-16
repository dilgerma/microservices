package de.effectivetrainings.correlation.request;

import com.google.common.base.Strings;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdServletRequestWrapper;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.UUID;

/**
 *
 */
@Slf4j
public class CorrelationIdFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        String correlationId = retrieveCorrelationId(servletRequest);
        MDC.put(CorrelationId.CORRELATION_ID_HEADER_KEY, correlationId);
        chain.doFilter(new CorrelationIdServletRequestWrapper(servletRequest, correlationId), response);
    }

    private String retrieveCorrelationId(HttpServletRequest servletRequest) {
        String correlationId = servletRequest.getHeader(CorrelationId.CORRELATION_ID_HEADER_KEY);
        if (Strings.isNullOrEmpty(correlationId)) {
            correlationId = UUID.randomUUID().toString();
            log.info("Providing new X-Correlation-Id : {}", correlationId);
        } else {
            log.info("Reusing existing X-Correlation-Id : {}", correlationId);
        }
        return correlationId;
    }

    @Override
    public void destroy() {

    }
}
