package de.effectivetrainings.billy.ui;

import de.effectivetrainings.billy.ui.config.ApplicationConfig;
import de.effectivetrainings.billy.ui.config.MessaginConnectionConfig;
import de.effectivetrainings.billy.ui.config.MetricsConfig;
import de.effectivetrainings.spring.influx.EnableInflux;
import de.effectivetrainings.support.rest.EnableRestSupport;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan("de.effectivetrainings.billy.ui.rest")
@EnableEurekaClient
@EnableRestSupport
@EnableInflux
@EnableCircuitBreaker
@EnableHystrixDashboard
@Import({ApplicationConfig.class, MetricsConfig.class, MessaginConnectionConfig.class})
public class Application
{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }


}
