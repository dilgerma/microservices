package de.effectivetrainings.eventstore.config;

import de.effectivetrainings.eventstore.EventPersistenceHandler;
import de.effectivetrainings.eventstore.EventStore;
import de.effectivetrainings.eventstore.repository.EventRepository;
import de.effectivetrainings.eventstore.repository.MongoEventRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

/**
 *
 */
@Configuration
public class EventConfig {

    @Bean
    public EventStore eventStore(EventRepository eventRepository) {
        return new EventStore(eventRepository);
    }

    @Bean
    public EventRepository eventRepository(MongoTemplate mongoTemplate) {
        return new MongoEventRepository(mongoTemplate);
    }

    @Bean
    public EventPersistenceHandler persistenceHandler(EventStore eventStore) {
        return new EventPersistenceHandler(eventStore);
    }
}
