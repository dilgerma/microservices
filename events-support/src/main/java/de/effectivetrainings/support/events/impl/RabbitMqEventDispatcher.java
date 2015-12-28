package de.effectivetrainings.support.events.impl;

import de.effectivetrainings.support.events.api.Event;
import de.effectivetrainings.support.events.api.EventListener;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

import java.util.List;

public class RabbitMqEventDispatcher {

    private List<EventListener<?>> eventListeners;

    public RabbitMqEventDispatcher(List<EventListener<?>> eventListeners) {
        this.eventListeners = eventListeners;
    }


    @RabbitListener(queues = "${events.queue}")
    public void dispatch(Event event) {
        eventListeners
                .stream()
                .filter(listener -> listener.supports(event))
                .forEach(eventListener -> eventListener.onEvent
                        (event));
    }

}
