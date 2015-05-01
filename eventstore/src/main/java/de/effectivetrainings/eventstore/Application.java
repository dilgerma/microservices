package de.effectivetrainings.eventstore;

import de.effectivetrainings.eventstore.config.EventConfig;
import de.effectivetrainings.eventstore.config.MessaginConnectionConfig;
import de.effectivetrainings.eventstore.config.MessagingConfig;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
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
@Import({EventConfig.class, MessaginConnectionConfig.class, MessagingConfig.class})
@EnableRabbit
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
