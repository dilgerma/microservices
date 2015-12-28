package de.effectivetrainings.support.events.api;

public interface Event<T> {

    T getPayload();
}
