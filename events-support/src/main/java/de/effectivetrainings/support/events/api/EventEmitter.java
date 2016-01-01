package de.effectivetrainings.support.events.api;

public interface EventEmitter {

    void emit(BaseEvent<?> ev);
}
