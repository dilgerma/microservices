package de.effectivetrainings.billy.registration.events.registration;

import de.effectivetrainings.billy.authserver.events.CustomerRegisteredEvent;
import de.effectivetrainings.support.events.api.EventHandler;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RegistrationEventHandler implements EventHandler<CustomerRegisteredEvent> {
    @Override
    public void onEvent(CustomerRegisteredEvent event) {
        log.info("Registration Event received : {}", event.getPayload());
    }

    @Override
    public boolean supports(CustomerRegisteredEvent event) {
        return event instanceof CustomerRegisteredEvent;
    }
}
