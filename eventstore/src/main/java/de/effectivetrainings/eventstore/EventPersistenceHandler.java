package de.effectivetrainings.eventstore;

import de.effectivetrainings.eventstore.events.Event;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;

/**
 * Messaging Handler that can be used to asynchronosly
 * process events per messages.
 */
@Slf4j
public class EventPersistenceHandler {

    private EventStore eventStore;

    public EventPersistenceHandler(EventStore eventStore) {
        this.eventStore = eventStore;
    }

    @RabbitListener(queues = "eventstore.events", containerFactory = "eventMessageContainerFactory")
    public void handleMessage(@Payload Event event)
    {
        log.info("Handling Message with Payload : {}", event);
        eventStore.store(event);
    }
}
