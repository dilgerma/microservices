package de.effectivetrainings.support.events.api;

public interface EventListener<T> {

    void onEvent(BaseEvent<T> event);

    boolean supports(BaseEvent event);
}
