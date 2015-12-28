package de.effectivetrainings;

import de.effectivetrainings.support.events.api.Event;
import de.effectivetrainings.support.events.api.EventListener;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class AddressChangedEventListener implements EventListener<TestAddressChangedEvent> {
    @Override
    public void onEvent(Event<TestAddressChangedEvent> event) {
        log.info(event.toString());
    }

    @Override
    public boolean supports(Event event) {
        return event instanceof TestAddressChangedEvent;
    }
}
