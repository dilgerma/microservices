package de.effectivetrainings;

import com.fasterxml.jackson.annotation.JsonProperty;
import de.effectivetrainings.support.events.api.Event;
import de.effectivetrainings.support.events.api.EventMessageContentType;
import lombok.Getter;
import lombok.NonNull;

@EventMessageContentType(version = 1, type = TestAddressChangedEvent.class, source = "testClient")
@Getter
public class TestAddressChangedEvent implements Event<Address> {

    @NonNull
    private Address payload;

    public TestAddressChangedEvent(@JsonProperty(value = "payload") Address payload) {
        this.payload = payload;
    }
}
