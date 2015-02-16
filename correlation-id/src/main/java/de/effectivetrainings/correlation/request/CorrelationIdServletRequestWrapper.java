package de.effectivetrainings.correlation.request;

import de.effectivetrainings.correlation.CorrelationId;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

/**
 *
 */
public class CorrelationIdServletRequestWrapper extends HttpServletRequestWrapper {

    private String correlationId;

    /**
     * Creates a ServletRequest adaptor wrapping the given request object.
     *
     * @param request
     * @throws IllegalArgumentException if the request is null
     */
    public CorrelationIdServletRequestWrapper(HttpServletRequest request, String correlationId) {
        super(request);
        this.correlationId = correlationId;
    }

    @Override
    public String getHeader(String name) {
        if(CorrelationId.CORRELATION_ID_HEADER_KEY.equals(name)) {
            return correlationId;
        }
        return super.getHeader(name);
    }
}
