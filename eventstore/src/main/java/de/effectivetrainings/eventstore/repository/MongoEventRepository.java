package de.effectivetrainings.eventstore.repository;

import de.effectivetrainings.eventstore.events.Event;
import de.effectivetrainings.eventstore.EventCannotBeAppliedException;
import de.effectivetrainings.eventstore.events.MongoEventAdapter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 *
 */
@Slf4j
public class MongoEventRepository implements EventRepository {

    private MongoTemplate mongoTemplate;

    public MongoEventRepository(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Event> findByAggregateId(String aggregateGroup, String aggregateId) {
        return mongoTemplate.find(new Query(where("aggregateId").is(aggregateId)), Event.class, aggregateGroup);
    }

    @Override
    public void append(Event event) {
        if(event.isValid()) {
            String collectionName = event.getAggregateName();
            mongoTemplate.save(new MongoEventAdapter<>(event), collectionName);
        } else {
            log.error("cannot append event {}", event);
            throw new EventCannotBeAppliedException("Event already persisted : " + event);
        }
    }
}
