package de.effectivetrainings.billing.rest;

import de.effectivetrainings.correlation.CorrelationId;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;

@Slf4j
public class CorrelationIdInterceptor implements ClientHttpRequestInterceptor {

    private CorrelationId correlationId;

    public CorrelationIdInterceptor(CorrelationId correlationId) {
        this.correlationId = correlationId;
    }

    @Override
    public ClientHttpResponse intercept(
            HttpRequest request, byte[] body, ClientHttpRequestExecution execution)
            throws IOException {
        log.debug("Request with Correlation ID : {}", correlationId.getCorrelationId());

        HttpHeaders headers = request.getHeaders();
        headers.add(CorrelationId.CORRELATION_ID_HEADER_KEY, correlationId.getCorrelationId());
        return execution.execute(request, body);
    }
}
