package de.effectivetrainings.support.events.api;

public interface EventEmitter {

    void emit(Event<?> ev);
}
