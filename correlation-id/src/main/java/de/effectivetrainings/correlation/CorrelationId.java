package de.effectivetrainings.correlation;

/**
 *
 */
public interface CorrelationId {
    String CORRELATION_ID_HEADER_KEY = "X-Correlation-Id";

    String getCorrelationId();
}
