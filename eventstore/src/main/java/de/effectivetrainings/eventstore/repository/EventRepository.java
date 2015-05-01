package de.effectivetrainings.eventstore.repository;

import de.effectivetrainings.eventstore.events.Event;

import java.util.List;

/**
 *
 */
public interface EventRepository {

    List<Event> findByAggregateId(String aggregateGroup, String aggregateId);

    void append(Event event);

}
