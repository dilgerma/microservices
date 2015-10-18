package de.effectivetrainings.spring.influx;

import com.codahale.metrics.MetricRegistry;
import de.effectivetrainings.influx.InfluxReporter;
import lombok.extern.slf4j.Slf4j;
import org.influxdb.InfluxDB;
import org.influxdb.InfluxDBFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
@Slf4j
public class InfluxConfig {

    @Value("${influx.uri}")
    private String influxURI;
    @Value("${influx.user}")
    private String influxUser;
    @Value("${influx.password}")
    private String influxPassword;
    @Value("${influx.db}")
    private String influxDb;
    @Value("${influx.prefix}")
    private String influxPrefix;

    @Autowired
    private MetricRegistry metricRegistry;

    @Bean
    public InfluxDB influxDB() {
        try {
            InfluxDB influxDB = InfluxDBFactory.connect(influxURI, influxUser, influxPassword);
            influxDB.createDatabase(influxDb);
            return influxDB;
        } catch (Exception e) {
            //dont fail for influx errors
            log.error("error registering to influx. Registering NoOp Influx", e);
            return new NoOpInflux();
        }
    }

    @Bean
    public InfluxReporter influxdbReporter() {
        final InfluxReporter metrics = new InfluxReporter(metricRegistry, "metrics", influxDB(), influxDb);
        metrics.start(1, TimeUnit.MINUTES);
        return metrics;
    }


}
