package de.effectivetrainings.billy.ui;

import de.effectivetrainings.billy.reporting.web.config.ApplicationConfig;
import de.effectivetrainings.billy.reporting.web.config.MetricsConfig;
import de.effectivetrainings.billy.reporting.web.config.RestConfig;
import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportRequest;
import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportingFacade;
import de.effectivetrainings.support.rest.EnableRestSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@EnableEurekaClient
@EnableRestSupport
@Import({ApplicationConfig.class, MetricsConfig.class, RestConfig.class})
public class Application
{
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
