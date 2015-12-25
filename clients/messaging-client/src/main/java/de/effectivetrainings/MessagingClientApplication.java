package de.effectivetrainings;

import de.effectivetrainings.support.events.config.MessagingConnectionConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(MessagingConnectionConfig.class)
public class MessagingClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(MessagingClientApplication.class, args);
    }

}
