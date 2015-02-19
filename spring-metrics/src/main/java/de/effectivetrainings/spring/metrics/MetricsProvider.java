package de.effectivetrainings.spring.metrics;

import com.codahale.metrics.*;
import com.google.common.base.Joiner;
import org.springframework.stereotype.Component;

/**
 *
 */
@Component
public class MetricsProvider {

    private static final String COUNTER_SUFFIX = "counter";
    private static final String METER_SUFFIX = "requestCount";

    private MetricRegistry metricRegistry;

    public MetricsProvider(MetricRegistry metricRegistry) {
        this.metricRegistry = metricRegistry;
    }

    public Timer timer(String serviceName) {
        return metricRegistry.timer(serviceName);
    }

    public Counter counter(String serviceName, String call) {
        return metricRegistry.counter(Joiner.on(".").join(serviceName, call, COUNTER_SUFFIX));
    }

    public Meter meter(String serviceName, String call) {
        return metricRegistry.meter(Joiner.on(".").join(serviceName, call, METER_SUFFIX));
    }
}
