package de.effectivetrainings.spring.influx;

import lombok.extern.slf4j.Slf4j;
import org.influxdb.InfluxDB;
import org.influxdb.dto.*;

import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Slf4j
public class NoOpInflux implements InfluxDB {
    @Override
    public InfluxDB setLogLevel(LogLevel logLevel) {
        log.debug("reporting against NoOpInflux");
        return this;
    }

    @Override
    public InfluxDB enableBatch(int i, int i1, TimeUnit timeUnit) {
        log.debug("reporting against NoOpInflux");
        return this;
    }

    @Override
    public InfluxDB disableBatch() {
        log.debug("reporting against NoOpInflux");
        return this;
    }

    @Override
    public Pong ping() {
        log.debug("reporting against NoOpInflux");
        return new Pong();
    }

    @Override
    public String version() {
        log.debug("reporting against NoOpInflux");
        return "0.0";
    }

    @Override
    public void write(String s, String s1, Point point) {
        log.debug("reporting against NoOpInflux");
    }

    @Override
    public void write(BatchPoints batchPoints) {
        log.debug("reporting against NoOpInflux");
    }

    @Override
    public QueryResult query(Query query) {
        log.debug("reporting against NoOpInflux");
        return new QueryResult();
    }

    @Override
    public QueryResult query(Query query, TimeUnit timeUnit) {
        return new QueryResult();
    }

    @Override
    public void createDatabase(String s) {
        log.debug("reporting against NoOpInflux");
    }

    @Override
    public void deleteDatabase(String s) {
        log.debug("reporting against NoOpInflux");
    }

    @Override
    public List<String> describeDatabases() {
        log.debug("reporting against NoOpInflux");
        return Collections.emptyList();
    }

    @Override
    public InfluxDB withDefaultRetentionPolicy(String s) {
        return this;
    }
}
