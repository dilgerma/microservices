package de.effectivetrainings.support.events.api;

public interface EventHandler<T> {

    void onEvent(T event);

    boolean supports(T event);
}
