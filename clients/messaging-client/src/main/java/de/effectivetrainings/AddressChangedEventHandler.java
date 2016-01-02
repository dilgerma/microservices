package de.effectivetrainings;

import de.effectivetrainings.support.events.api.EventHandler;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class AddressChangedEventHandler implements EventHandler<TestAddressChangedEvent> {
    @Override
    public void onEvent(TestAddressChangedEvent event) {
        log.info(event.toString());
    }

    @Override
    public boolean supports(TestAddressChangedEvent event) {
        return event instanceof TestAddressChangedEvent;
    }
}
