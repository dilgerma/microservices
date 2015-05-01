package de.effectivetrainings.eventstore;

import de.effectivetrainings.eventstore.events.Event;
import de.effectivetrainings.eventstore.events.MongoEventAdapter;
import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.List;

import static org.junit.Assert.assertEquals;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource("classpath:application.properties")
@Ignore
public class EventStoreTest {

    public static final String COLLECTION_NAME = "TestCollection" + Math.round(Math.random() * 1000);

    @Autowired
    private EventStore eventStore;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Before
    @After
    public void dropCollection() {
        mongoTemplate.dropCollection(COLLECTION_NAME);
    }

    @Test
    public void persistAndLoadEvents() {
        Event payload = new TestEvent(COLLECTION_NAME);

        assertEquals(0, eventStore.events(COLLECTION_NAME, payload.getAggregateId()).size());

        Event event = new MongoEventAdapter<>(payload);
        eventStore.store(event);
        assertEquals(1, eventStore.events(COLLECTION_NAME, payload.getAggregateId()).size());

        eventStore.store(event);
        assertEquals(2, eventStore.events(COLLECTION_NAME, payload.getAggregateId()).size());
    }

    @Test(expected = EventCannotBeAppliedException.class)
    public void storeEventTwiceIsNotPossible() {

        Event event = new MongoEventAdapter<>(new TestEvent(COLLECTION_NAME));
        eventStore.store(event);
        final List<Event> persistedEvents = eventStore.events(COLLECTION_NAME, "first");
        assertEquals(1, persistedEvents.size());

        Event persistedEvent = persistedEvents.get(0);
        //modify event and store again.. must not be possible
        ReflectionTestUtils.setField(persistedEvent, "payload", "someOtherPayload");
        eventStore.store(persistedEvent);
    }

}
