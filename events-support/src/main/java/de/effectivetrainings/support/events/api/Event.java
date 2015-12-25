package de.effectivetrainings.support.events.api;

public interface Event<T> {

    int version();

    String source();

    String id();

    T getPayload();

    EventType type();
}
