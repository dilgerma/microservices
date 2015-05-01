package de.effectivetrainings.eventstore;

import de.effectivetrainings.eventstore.events.Event;
import de.effectivetrainings.eventstore.events.MongoEventAdapter;
import lombok.Getter;
import lombok.NonNull;
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

import java.util.Date;
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
    private static final String PAYLOAD = "payload";
    private static final String AGGREGATE_ID = "id";

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

        TestEvent payload = defaultTestEvent();

        assertEquals(0, eventStore.events(COLLECTION_NAME, payload.getAggregateId()).size());

        Event event = new MongoEventAdapter(payload);
        eventStore.store(event);
        assertEquals(1, eventStore.events(COLLECTION_NAME, payload.getAggregateId()).size());

        eventStore.store(event);
        assertEquals(2, eventStore.events(COLLECTION_NAME, payload.getAggregateId()).size());
    }

    @Test(expected = EventCannotBeAppliedException.class)
    public void storeEventTwiceIsNotPossible() {

        eventStore.store(new MongoEventAdapter(defaultTestEvent()));
        final List<Event> persistedEvents = eventStore.events(COLLECTION_NAME, "first");
        assertEquals(1, persistedEvents.size());

        Event persistedEvent = persistedEvents.get(0);
        //modify event and store again.. must not be possible
        ReflectionTestUtils.setField(persistedEvent, "payload", "someOtherPayload");
        eventStore.store(persistedEvent);
    }

    @Test
    public void storeDifferentEventsAndDeserialize() {

        final String customerId = "4711";
        final TestCustomer hans = new TestCustomer(customerId,"Hans");
        eventStore.store(new CustomerCreatedEvent(COLLECTION_NAME, hans));
        eventStore.store(new CustomerBirthdayEvent(COLLECTION_NAME, new Date(), hans.getCustomerId()));

        List<Event> events = eventStore.events(COLLECTION_NAME, customerId);
        assertEquals(2, events.size());
    }

    private TestEvent defaultTestEvent(){
        return  new TestEvent(COLLECTION_NAME, PAYLOAD, AGGREGATE_ID);
    }

    @Getter
    private class TestCustomer {
        @NonNull
        private String name;

        private String customerId;

        public TestCustomer(String customerId, String name) {
            this.name = name;
            this.customerId = customerId;
        }
    }

    private class CustomerCreatedEvent extends TestEvent {
        public CustomerCreatedEvent(String aggregateName, TestCustomer payload) {
            super(aggregateName, payload, payload.getCustomerId());
        }

    }

    private class CustomerBirthdayEvent extends TestEvent {
        public CustomerBirthdayEvent(String aggregateName, Date payload, String aggregateId) {
            super(aggregateName, payload, aggregateId);
        }
    }

}
