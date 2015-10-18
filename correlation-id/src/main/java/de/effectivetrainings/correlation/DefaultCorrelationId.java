package de.effectivetrainings.correlation;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 *
 */
@Getter
@AllArgsConstructor
public class DefaultCorrelationId implements CorrelationId {

    private String correlationId;

}
