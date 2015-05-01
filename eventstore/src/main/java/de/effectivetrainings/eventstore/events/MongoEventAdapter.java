package de.effectivetrainings.eventstore.events;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

/**
 *
 */
@Getter
@EqualsAndHashCode
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class MongoEventAdapter implements Event {

    @NonNull
    private Event event;

    public MongoEventAdapter(Event event) {
        this.event = event;
    }

    @JsonIgnore
    @Override
    public String getAggregateId() {
        return event.getAggregateId();
    }

    @JsonIgnore
    @Override
    public String getAggregateName() {
        return event.getAggregateName();
    }

    @JsonIgnore
    @Override
    public Object getPayload() {
        return event.getPayload();
    }

    public boolean isValid() {
        return event.isValid();
    }

}

