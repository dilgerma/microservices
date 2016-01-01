package de.effectivetrainings.support.events.impl;

import de.effectivetrainings.support.events.api.BaseEvent;
import de.effectivetrainings.support.events.api.EventListener;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

import java.util.ArrayList;
import java.util.List;

public class AmqpEventDispatcher {

    private List<EventListener<?>> eventListeners;

    public AmqpEventDispatcher(List<EventListener<?>> eventListeners) {
        this.eventListeners = eventListeners != null ? eventListeners : new ArrayList<>();
    }


    @RabbitListener(queues = "${events.queue.name}")
    public void dispatch(BaseEvent event) {
        eventListeners
                .stream()
                .filter(listener -> listener.supports(event))
                .forEach(eventListener -> eventListener.onEvent
                        (event));
    }

}
