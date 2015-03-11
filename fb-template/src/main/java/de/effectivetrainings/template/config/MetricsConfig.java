package de.effectivetrainings.template.config;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.MetricFilter;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.graphite.Graphite;
import com.codahale.metrics.graphite.GraphiteReporter;
import com.codahale.metrics.health.HealthCheck;
import com.codahale.metrics.health.HealthCheckRegistry;
import com.mongodb.MongoClient;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.template.metrics.MongoHealthCheck;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.net.InetSocketAddress;
import java.util.SortedMap;
import java.util.concurrent.TimeUnit;

@Configuration
@Slf4j
public class MetricsConfig {

    @Autowired
    private HealthCheckRegistry healthCheckRegistry;

    @Autowired
    private MetricRegistry metricRegistry;

    @Bean
    public GraphiteReporter reporter(MetricRegistry registry) {
        final Graphite graphite = new Graphite(new InetSocketAddress("graphite", 2003));
        final GraphiteReporter reporter = GraphiteReporter.forRegistry(registry)
                .prefixedWith("template")
                .convertRatesTo(TimeUnit.SECONDS)
                .convertDurationsTo(TimeUnit.MILLISECONDS)
                .filter(MetricFilter.ALL)
                .build(graphite);
        reporter.start(1l, TimeUnit.SECONDS);
        return reporter;
    }

    @Bean
    public HealthCheckRegistry healthChecks(MongoHealthCheck mongoHealthCheck) {
        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
        healthCheckRegistry.register("mongo", mongoHealthCheck);
        return healthCheckRegistry;
    }

    @Bean
    public MongoHealthCheck mongoHealthCheck(MongoClient mongoClient) {
        return new MongoHealthCheck(mongoClient);
    }

    @Bean
    public MetricsProvider metricsProvider(MetricRegistry metricRegistry) {
        return new MetricsProvider(metricRegistry);
    }

    @PostConstruct
    public void registerMetrics() {
        metricRegistry.register("service-health-checks", (Gauge<Integer>) () -> {
            final SortedMap<String, HealthCheck.Result> healthChecks = healthCheckRegistry.runHealthChecks();
            log.info("Running Template Service Health Check");
            final boolean healthy = healthChecks.entrySet().stream().filter((h) -> !h.getValue().isHealthy()).findFirst().isPresent();
            log.info("Service Health Check : {}", healthy);
            return healthy ? 1 : 0;
        });
    }
}