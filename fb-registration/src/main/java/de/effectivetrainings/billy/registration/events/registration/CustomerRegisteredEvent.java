package de.effectivetrainings.billy.registration.events.registration;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.effectivetrainings.support.events.api.BaseEvent;
import de.effectivetrainings.support.events.api.EventMessageContentType;

@EventMessageContentType(classType = CustomerRegisteredEvent.class, eventSource = "authserver")
public class CustomerRegisteredEvent extends BaseEvent<RegisteredCustomer> {

    @JsonCreator
    public CustomerRegisteredEvent(@JsonProperty("payload") RegisteredCustomer payload) {
        super(payload);
    }

}
