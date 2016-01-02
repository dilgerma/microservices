package de.effectivetrainings.support.events.api;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Objects;

public abstract class BaseEvent<T> {

    @JsonProperty("payload")
    private T payload;

    public BaseEvent(T payload) {
        this.payload = Objects.requireNonNull(payload);
    }

    public final T getPayload() {
        return payload;
    }
}
