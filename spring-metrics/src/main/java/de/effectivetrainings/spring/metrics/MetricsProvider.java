package de.effectivetrainings.spring.metrics;

import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.Timer;
import org.springframework.stereotype.Component;

/**
 *
 */
@Component
public class MetricsProvider {

    private MetricRegistry metricRegistry;

    public MetricsProvider(MetricRegistry metricRegistry) {
        this.metricRegistry = metricRegistry;
    }

    public Timer timer(String uri) {
        return metricRegistry.timer(uri);
    }
}
