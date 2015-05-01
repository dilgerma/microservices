package de.effectivetrainings.billy.customermanagement.handler;

import de.effectivetrainings.billy.customermanagement.config.MessagingConstants;
import de.effectivetrainings.billy.customermanagement.events.CustomerCreatedEvent;
import de.effectivetrainings.billy.customermanagement.mapping.CustomerApiToDomainMapper;
import de.effectivetrainings.billy.customermanagement.rest.api.domain.Customer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;

/**
 *
 */
@Slf4j
public class CustomerCommandHandler {


    private CustomerApiToDomainMapper apiToDomainMapper = new CustomerApiToDomainMapper();

    private AmqpTemplate amqpTemplate;

    private String eventExchange;

    public CustomerCommandHandler(String eventExchange, AmqpTemplate amqpTemplate) {
        this.amqpTemplate = amqpTemplate;
        this.eventExchange = eventExchange;
    }

    @RabbitListener(queues = MessagingConstants.CUSTOMER_INTERNAL_QUEUE)
    public void handleMessage(Message message, @Payload Customer customer) {
        log.info("Received Message {}", customer);

        amqpTemplate.convertAndSend(eventExchange, null, new CustomerCreatedEvent(apiToDomainMapper.toDomain(customer)));

    }
}
