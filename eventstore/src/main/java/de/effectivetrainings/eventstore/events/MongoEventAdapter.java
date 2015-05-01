package de.effectivetrainings.eventstore.events;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 *
 */
@Getter
@EqualsAndHashCode
@NoArgsConstructor
public class MongoEventAdapter<T> implements Event {

    @Id
    private String id;

    @NonNull
    private String aggregateName;

    @NonNull
    private String aggregateId;

    @NonNull
    private T payload;

    @CreatedDate
    private Date eventDate;

    public MongoEventAdapter(Event<T> other) {
        this.aggregateName = other.getAggregateName();
        this.aggregateId = other.getAggregateId();
        this.payload = other.getPayload();
    }

    @Override
    public boolean isValid() {
        return id == null;
    }

}

