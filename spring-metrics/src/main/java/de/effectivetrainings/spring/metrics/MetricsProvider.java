package de.effectivetrainings.spring.metrics;

import com.codahale.metrics.Counter;
import com.codahale.metrics.Meter;
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

    public Timer timer(String serviceName) {
        return metricRegistry.timer(serviceName);
    }

    public Counter counter(String name) {
        return metricRegistry.counter(name);
    }

    public Meter meter(String call) {
        return metricRegistry.meter(call);
    }
}
