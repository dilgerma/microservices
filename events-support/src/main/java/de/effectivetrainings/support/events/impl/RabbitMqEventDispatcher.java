package de.effectivetrainings.support.events.impl;

import de.effectivetrainings.support.events.api.Event;
import de.effectivetrainings.support.events.api.EventListener;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.messaging.handler.annotation.Payload;

import java.util.List;

@RabbitListener(queues = "${events.queue}")
public class RabbitMqEventDispatcher extends SimpleMessageListenerContainer {

    private List<EventListener<?>> eventListeners;

    public RabbitMqEventDispatcher(List<EventListener<?>> eventListeners) {
        this.eventListeners = eventListeners;
    }


    @RabbitHandler
    public void dispatch(@Payload Event event) {
        eventListeners
                .stream()
                .filter(eventListener -> eventListener.supports(event.type(), event.version(), event.source()))
                .forEach(eventListener -> eventListener.onEvent(event));
    }
}
