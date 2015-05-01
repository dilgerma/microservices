package de.effectivetrainings.eventstore.events;

/**
 *
 */
public interface Event<T> {

    /**
     * the id of the corresponding aggregate.
     * this can for example be mapped 1:1 to an
     * primary key of an entiry in a relational model
     * or the id of a document in a datastore.
     */
    String getAggregateId();

    /**
     * a general name for the aggregate, that this event belongs to.
     * This can for example be mapped to a collection-name in mongo or
     * a table name in a relational database.
     * @return
     */
    String getAggregateName();

    T getPayload();

    default int getVersion() {
        return 0;
    };

    default boolean isValid() {
        return true;
    }
}
