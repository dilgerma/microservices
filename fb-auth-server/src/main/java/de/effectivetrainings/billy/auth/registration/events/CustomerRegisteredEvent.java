package de.effectivetrainings.billy.auth.registration.events;


import de.effectivetrainings.billy.auth.AuthserverApplication;
import de.effectivetrainings.support.events.api.Event;
import de.effectivetrainings.support.events.api.EventMessageContentType;

@EventMessageContentType(version = 1, type = RegisteredCustomer.class, source = AuthserverApplication.EVENT_SOURCE)
public class CustomerRegisteredEvent implements Event<RegisteredCustomer> {

    private RegisteredCustomer registeredCustomer;

    public CustomerRegisteredEvent(RegisteredCustomer registeredCustomer) {
        this.registeredCustomer = registeredCustomer;
    }

    @Override
    public RegisteredCustomer getPayload() {
        return registeredCustomer;
    }
}
