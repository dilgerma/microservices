package de.effectivetrainings.fastbill.config;

import com.codahale.metrics.MetricFilter;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.graphite.Graphite;
import com.codahale.metrics.graphite.GraphiteReporter;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.net.InetSocketAddress;
import java.util.concurrent.TimeUnit;

@Configuration
@Slf4j
public class MetricsConfig  {

    @Bean
    public MetricRegistry metricRegistry() {
        MetricRegistry registry =  new MetricRegistry();
        return registry;
    }

    @Bean
    public GraphiteReporter reporter(MetricRegistry registry) {
        final Graphite graphite = new Graphite(new InetSocketAddress("graphite", 2003));
        final GraphiteReporter reporter = GraphiteReporter.forRegistry(registry)
                                                          .prefixedWith("customers")
                                                          .convertRatesTo(TimeUnit.SECONDS)
                                                          .convertDurationsTo(TimeUnit.MILLISECONDS)
                                                          .filter(MetricFilter.ALL)
                                                          .build(graphite);
        reporter.start(1l, TimeUnit.MINUTES);
        return reporter;
    }

    @Bean
    public MetricsProvider metricsProvider(MetricRegistry metricRegistry) {
        return new MetricsProvider(metricRegistry);
    }
}