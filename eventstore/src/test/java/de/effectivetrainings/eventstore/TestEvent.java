package de.effectivetrainings.eventstore;

import de.effectivetrainings.eventstore.events.Event;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.UUID;

@Getter
@AllArgsConstructor
class TestEvent implements Event {

    protected String aggregateName;

    protected Object payload = "test-payload";

    protected String aggregateId = UUID.randomUUID().toString();
}