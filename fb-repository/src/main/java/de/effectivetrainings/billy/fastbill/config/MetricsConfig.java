package de.effectivetrainings.billy.fastbill.config;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.health.HealthCheck;
import com.codahale.metrics.health.HealthCheckRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.metrics.dropwizard.DropwizardMetricServices;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.net.URI;
import java.util.SortedMap;

@Configuration
@Slf4j
public class MetricsConfig {

    @Autowired
    private HealthCheckRegistry healthCheckRegistry;

    @Autowired
    private MetricRegistry metricRegistry;

    @Bean
    public HealthCheckRegistry healthChecks() {
        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
//        final ConnectionHealthCheck connectionHealthCheck = new ConnectionHealthCheck(fastbillApiUri, restTemplate);
//        healthCheckRegistry.register("repository/backend", connectionHealthCheck);
        return healthCheckRegistry;
    }

    //just here to prevent duplciate bean exceptions (with HystrixMetricsPollerConfiguration)
    @Bean
    @Primary
    public DropwizardMetricServices dropwizardMetricServices() {
        return new DropwizardMetricServices(metricRegistry);
    }

}