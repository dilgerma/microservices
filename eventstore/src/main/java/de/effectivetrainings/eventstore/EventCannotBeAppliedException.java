package de.effectivetrainings.eventstore;

/**
 *
 */
public class EventCannotBeAppliedException extends RuntimeException {

    public EventCannotBeAppliedException(String message) {
        super(message);
    }

    public EventCannotBeAppliedException(String message, Throwable cause) {
        super(message, cause);
    }

    public EventCannotBeAppliedException(Throwable cause) {
        super(cause);
    }
}
