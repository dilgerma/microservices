package de.effectivetrainings.billy.billing.config;

import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.health.HealthCheckRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.metrics.dropwizard.DropwizardMetricServices;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Configuration
@Slf4j
public class MetricsConfig {


    @Autowired
    private MetricRegistry metricRegistry;

    //just here to prevent duplciate bean exceptions (with HystrixMetricsPollerConfiguration)
    @Bean
    @Primary
    public DropwizardMetricServices dropwizardMetricServices() {
        return new DropwizardMetricServices(metricRegistry);
    }

}