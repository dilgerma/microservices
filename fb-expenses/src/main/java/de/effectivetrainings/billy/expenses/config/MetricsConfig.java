package de.effectivetrainings.billy.expenses.config;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.MetricFilter;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.graphite.Graphite;
import com.codahale.metrics.graphite.GraphiteReporter;
import com.codahale.metrics.health.HealthCheck;
import com.codahale.metrics.health.HealthCheckRegistry;
import de.effectivetrainings.spring.metrics.ConnectionHealthCheck;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.net.InetSocketAddress;
import java.net.URI;
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
                .prefixedWith("expenses")
                .convertRatesTo(TimeUnit.SECONDS)
                .convertDurationsTo(TimeUnit.MILLISECONDS)
                .filter(MetricFilter.ALL)
                .build(graphite);
        reporter.start(1l, TimeUnit.MINUTES);
        return reporter;
    }

    @Bean
    public HealthCheckRegistry healthChecks(@SystemRequestTemplate RestTemplate restTemplate, @Value("${fb.repository.expenses}") URI customerUri) {

        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
        final ConnectionHealthCheck connectionHealthCheck = new ConnectionHealthCheck(customerUri, restTemplate);
        healthCheckRegistry.register("expenses/repository", connectionHealthCheck);
        return healthCheckRegistry;
    }

    @PostConstruct
    public void registerMetrics() {
        metricRegistry.register("service-health-checks", (Gauge<Integer>) () -> {
            final SortedMap<String, HealthCheck.Result> healthChecks = healthCheckRegistry.runHealthChecks();
            log.info("Running Expense Service Health Check");
            boolean healthy = !healthChecks.entrySet().stream().filter((h) -> !h.getValue().isHealthy()).findFirst().isPresent();
            log.info("Service Health Check : {}", healthy);
            return healthy ? 1 : 0;
        });
    }

}