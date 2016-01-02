package de.effectivetrainings.support.events.impl;

import de.effectivetrainings.support.events.api.EventEmitter;
import org.springframework.amqp.core.AmqpTemplate;

public class AmqpEventEmitter implements EventEmitter {

    private AmqpTemplate rabbitTemplate;

    private final String eventsExchange;

    public AmqpEventEmitter(String eventsExchange, AmqpTemplate rabbitTemplate) {
        this.eventsExchange = eventsExchange;
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public void emit(Object ev) {
        rabbitTemplate.convertAndSend(eventsExchange, null, ev);
    }
}
