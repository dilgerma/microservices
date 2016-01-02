package de.effectivetrainings.support.events.impl;

import de.effectivetrainings.support.events.api.EventHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.Message;

import java.util.ArrayList;
import java.util.List;

public class AmqpEventDispatcher {

    private List<EventHandler> eventHandlers;

    public AmqpEventDispatcher(List<EventHandler> eventHandlers) {
        this.eventHandlers = eventHandlers != null ? eventHandlers : new ArrayList<>();
    }


    @RabbitListener(queues = "${events.queue.name}")
    public void dispatch(Message event) {
        eventHandlers
                .stream()
                .filter(listener -> listener.supports(event.getPayload()))
                .forEach(eventListener -> eventListener.onEvent
                        (event.getPayload()));
    }

}
