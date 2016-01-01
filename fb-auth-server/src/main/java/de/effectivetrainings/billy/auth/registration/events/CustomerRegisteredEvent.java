package de.effectivetrainings.billy.auth.registration.events;


import com.fasterxml.jackson.annotation.JsonCreator;
import de.effectivetrainings.support.events.api.ApiVersion;
import de.effectivetrainings.support.events.api.BaseEvent;

@ApiVersion(version = 1)
public class CustomerRegisteredEvent extends BaseEvent<RegisteredCustomer> {

    @JsonCreator
    public CustomerRegisteredEvent(RegisteredCustomer payload) {
        super(payload);
    }

}
