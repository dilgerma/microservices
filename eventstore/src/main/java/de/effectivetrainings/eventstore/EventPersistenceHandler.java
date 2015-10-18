package de.effectivetrainings.eventstore;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.effectivetrainings.eventstore.events.MongoEventAdapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;

/**
 * Messaging Handler that can be used to asynchronosly
 * process events per messages.
 */
@Slf4j
public class EventPersistenceHandler extends JSONCommandHandler<MongoEventAdapter> {

    private EventStore eventStore;

    public EventPersistenceHandler(EventStore eventStore) {
        super(MongoEventAdapter.class, new ObjectMapper());
        this.eventStore = eventStore;
    }

    @RabbitListener(queues = "eventstore.events", containerFactory = "eventMessageContainerFactory")
    public void handleMessage(Message message)
    {
        log.info("Handling Message with Payload : {}", message);
        eventStore.store(getPayload(message.getBody()));
    }
}
