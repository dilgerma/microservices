package de.effectivetrainings.billy.template.config;

import com.codahale.metrics.Gauge;
import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.health.HealthCheck;
import com.codahale.metrics.health.HealthCheckRegistry;
import com.mongodb.MongoClient;
import de.effectivetrainings.billy.template.metrics.MongoHealthCheck;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.metrics.dropwizard.DropwizardMetricServices;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.jta.JtaTransactionManager;

import javax.annotation.PostConstruct;
import java.util.SortedMap;

@Configuration
@Slf4j
public class MetricsConfig {

    @Autowired
    private HealthCheckRegistry healthCheckRegistry;

    @Autowired
    private MetricRegistry metricRegistry;

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

    //just here to prevent duplciate bean exceptions (with HystrixMetricsPollerConfiguration)
     @Bean
     @Primary
     public DropwizardMetricServices dropwizardMetricServices() {
         return new DropwizardMetricServices(metricRegistry);
     }
}