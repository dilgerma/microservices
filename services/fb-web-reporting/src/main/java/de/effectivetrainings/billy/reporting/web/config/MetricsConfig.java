package de.effectivetrainings.billy.reporting.web.config;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.MetricFilter;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.graphite.Graphite;
import com.codahale.metrics.graphite.GraphiteReporter;
import com.codahale.metrics.health.HealthCheck;
import com.codahale.metrics.health.HealthCheckRegistry;
import de.effectivetrainings.spring.graphite.FailsafeGraphite;
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
    public HealthCheckRegistry healthChecks(@SystemRequestTemplate RestTemplate restTemplate, @Value("${fb.reporting.uri}") URI reportingURI) {

        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
        return healthCheckRegistry;
    }


    @PostConstruct
    public void registerMetrics() {
        metricRegistry.register("service-health-checks", (Gauge<Integer>) () -> {
            final SortedMap<String, HealthCheck.Result> healthChecks = healthCheckRegistry.runHealthChecks();
            log.info("Running UI Service Health Check");
            final boolean healthy = !healthChecks.entrySet().stream().filter((h) -> !h.getValue().isHealthy()).findFirst().isPresent();
            log.info("Service Health Check : {}", healthy);
            return healthy ? 1 : 0;
        });
    }
}