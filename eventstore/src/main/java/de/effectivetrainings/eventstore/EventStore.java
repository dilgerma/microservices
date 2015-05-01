package de.effectivetrainings.eventstore;


import de.effectivetrainings.eventstore.events.Event;
import de.effectivetrainings.eventstore.repository.EventRepository;

import java.util.List;

/**
 *
 */
public class EventStore {

    private final EventRepository eventRepository;

    public EventStore(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public void store(Event baseEvent) {
        eventRepository.append(baseEvent);
    }

    public List<Event> events(String aggregateName, String aggregateId) {
        return eventRepository.findByAggregateId(aggregateName, aggregateId);
    }
}
