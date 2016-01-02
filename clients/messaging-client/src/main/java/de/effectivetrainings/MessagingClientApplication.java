package de.effectivetrainings;

import de.effectivetrainings.support.events.api.EventEmitter;
import de.effectivetrainings.support.events.api.EventsExchangeQualifier;
import de.effectivetrainings.support.events.config.MessagingConnectionConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Import(MessagingConnectionConfig.class)
@RestController
@Slf4j
public class MessagingClientApplication {

    public static void main(String[] args) {
        SpringApplication.run(MessagingClientApplication.class, args);
    }

    @Autowired
    private EventEmitter eventEmitter;

    @Autowired
    @EventsExchangeQualifier
    private FanoutExchange eventsExchange;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void raiseEvent() {
        log.info("raising event");
        Address address = new Address("street", "52a", "80805", "München");
        eventEmitter.emit(new TestAddressChangedEvent(address));
    }

    @Bean
    public AddressChangedEventHandler eventListener() {
        return new AddressChangedEventHandler();
    }

    @Bean
    public Queue queue() {
        return new Queue("testClientQueue", true, false, true);
    }

    @Bean
    public Binding binding() {
        return BindingBuilder.bind(queue()).to(eventsExchange);
    }
}
