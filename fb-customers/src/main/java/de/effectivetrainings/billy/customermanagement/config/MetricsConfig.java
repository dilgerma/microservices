package de.effectivetrainings.billy.customermanagement.config;

import com.codahale.metrics.MetricFilter;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.graphite.Graphite;
import com.codahale.metrics.graphite.GraphiteReporter;
import com.codahale.metrics.health.HealthCheckRegistry;
import de.effectivetrainings.spring.graphite.FailsafeGraphite;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.net.InetSocketAddress;
import java.net.URI;
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
        final Graphite graphite = new FailsafeGraphite(new InetSocketAddress("graphite", 2003));
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
    public HealthCheckRegistry healthChecks(@SystemRequestTemplate RestTemplate restTemplate, @Value("${fb.repository.customer}") URI customerServiceURI) {
        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
//        final ConnectionHealthCheck connectionHealthCheck = new ConnectionHealthCheck(customerServiceURI, restTemplate);
//        healthCh  eckRegistry.register("customers/repository", connectionHealthCheck);
        return healthCheckRegistry;
    }

}