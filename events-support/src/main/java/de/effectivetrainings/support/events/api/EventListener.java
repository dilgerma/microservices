package de.effectivetrainings.support.events.api;

public interface EventListener<T> {

    void onEvent(Event<T> event);

    boolean supports(EventType eventType, int version, String source);
}
