package de.effectivetrainings;

import com.fasterxml.jackson.annotation.JsonProperty;
import de.effectivetrainings.support.events.api.BaseEvent;
import de.effectivetrainings.support.events.api.EventMessageContentType;
import lombok.Getter;

@EventMessageContentType(classType = TestAddressChangedEvent.class, eventSource = "testClient")
@Getter
public class TestAddressChangedEvent extends BaseEvent<Address> {

    public TestAddressChangedEvent(@JsonProperty(value = "payload") Address payload) {
        super(payload);
    }
}
