package de.effectivetrainings.eventstore;

/**
 *
 */

import de.effectivetrainings.eventstore.config.MessagingTemplate;
import de.effectivetrainings.eventstore.events.MongoEventAdapter;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.UUID;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource("classpath:application.properties")
@Ignore
public class PersistenceHandlerTest {

    @Autowired
    private EventPersistenceHandler eventPersistenceHandler;

    @Autowired
    @MessagingTemplate
    private AmqpTemplate amqpTemplate;


    @Test
    public void publishEvent() throws Exception{
        MongoEventAdapter event = new MongoEventAdapter(new TestEvent(UUID.randomUUID().toString(),"payload","id"));
        amqpTemplate.convertAndSend("eventStore.inbound.events", "", event);
    }

}
