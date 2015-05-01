package de.effectivetrainings.billy.customermanagement.config;

import de.effectivetrainings.billy.customermanagement.handler.CustomerCommandHandler;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 */
@Configuration
public class ServiceConfig {

    @Bean
       public CustomerCommandHandler customerCreateHandler(@Value("${eventstore.eventExchange}") String eventExchange, @MessagingTemplate AmqpTemplate amqpTemplate) {
           return new CustomerCommandHandler(eventExchange, amqpTemplate);
       }

}
