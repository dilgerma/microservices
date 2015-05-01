package de.effectivetrainings.billy.customermanagement.events;

/**
 * Contract for the event store.
 */
public interface Event<T> {


    String getAggregateId();

    String getAggregateName();

    T getPayload();

    default int getVersion() {
        return 0;
    };

    default boolean isValid() {
        return true;
    }
}
