package de.effectivetrainings.billy.registration.events.registration;

import de.effectivetrainings.support.events.api.BaseEvent;
import de.effectivetrainings.support.events.api.EventListener;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RegistrationEventListener implements EventListener<CustomerRegisteredEvent> {
    @Override
    public void onEvent(BaseEvent event) {
        log.info("Registration Event received : {}", event.getPayload());
    }

    @Override
    public boolean supports(BaseEvent event) {
        return event instanceof CustomerRegisteredEvent;
    }
}
