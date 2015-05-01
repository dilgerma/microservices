package de.effectivetrainings.eventstore;

import de.effectivetrainings.eventstore.events.Event;
import lombok.Getter;

class TestEvent implements Event {

    @Getter
    private String collectionName;

    public TestEvent(String collectionName) {
        this.collectionName = collectionName;
    }

    @Override
    public String getAggregateId() {
        return "first";
    }

    @Override
    public String getAggregateName() {
        return collectionName;
    }

    @Override
    public Object getPayload() {
        return "test-payload";
    }
}