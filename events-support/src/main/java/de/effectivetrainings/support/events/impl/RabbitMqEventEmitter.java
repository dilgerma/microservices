package de.effectivetrainings.support.events.impl;

import de.effectivetrainings.support.events.api.Event;
import de.effectivetrainings.support.events.api.EventEmitter;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

public class RabbitMqEventEmitter implements EventEmitter {

    private static final String EVENT_CHANNEL = "billy.events";

    private RabbitTemplate rabbitTemplate;

    public RabbitMqEventEmitter(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Override
    public void emit(Event<?> ev) {
        rabbitTemplate.convertAndSend(EVENT_CHANNEL, null, ev);
    }
}
