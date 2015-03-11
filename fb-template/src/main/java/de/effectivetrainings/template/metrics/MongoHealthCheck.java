package de.effectivetrainings.template.metrics;

import com.codahale.metrics.health.HealthCheck;
import com.mongodb.CommandResult;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import de.effectivetrainings.template.db.TemplateDB;
import lombok.extern.slf4j.Slf4j;

/**
 *
 */
@Slf4j
public class MongoHealthCheck extends HealthCheck {

    private final MongoClient mongoClient;

    public MongoHealthCheck(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    @Override
    protected Result check() throws Exception {
        log.info("Running Mongo Health Check");
        DB db =  mongoClient.getDB(TemplateDB.DB_NAME);
        CommandResult commandResult  =db.command("ping");
        log.info("Mongo Health Check is ok : {}", commandResult.ok());
        return commandResult.ok() ? Result.healthy() : Result.unhealthy("Mongo not responding");
    }
}
