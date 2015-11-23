package de.effectivetrainings.billy.customermanagement.config;

import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.health.HealthCheckRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Configuration
@Slf4j
public class MetricsConfig {

    @Autowired
    private MetricRegistry metricRegistry;

    @Bean
    public HealthCheckRegistry healthChecks() {
        HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();
//        final ConnectionHealthCheck connectionHealthCheck = new ConnectionHealthCheck(customerServiceURI, restTemplate);
//        healthCh  eckRegistry.register("customers/repository", connectionHealthCheck);
        return healthCheckRegistry;
    }

}