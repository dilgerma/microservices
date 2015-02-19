package de.effectivetrainings.billing;

import de.effectivetrainings.billing.config.ApplicationConfig;
import de.effectivetrainings.billing.config.MetricsConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
@Import({ApplicationConfig.class, MetricsConfig.class})
public class Application
{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
