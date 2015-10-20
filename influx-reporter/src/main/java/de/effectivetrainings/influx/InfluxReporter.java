package de.effectivetrainings.influx;

import com.codahale.metrics.*;
import com.codahale.metrics.Timer;
import lombok.extern.slf4j.Slf4j;
import org.influxdb.InfluxDB;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;

import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Slf4j
public class InfluxReporter extends ScheduledReporter {

    private InfluxDB influxDB;
    private String database;

    public InfluxReporter(MetricRegistry registry,
                          String name,
                          MetricFilter filter,
                          TimeUnit rateUnit,
                          TimeUnit durationUnit,
                          InfluxDB influxDB,
                          String database) {
        super(registry, name, filter, rateUnit, durationUnit);
        this.influxDB = influxDB;
        this.database = database;
    }

    public InfluxReporter(MetricRegistry registry, String name, InfluxDB influxDB, String database) {
        this(registry, name, MetricFilter.ALL, TimeUnit.SECONDS, TimeUnit.MILLISECONDS, influxDB, database);
    }

    @Override
    public void report(SortedMap<String, Gauge> gauges,
                       SortedMap<String, Counter> counters,
                       SortedMap<String, Histogram> histograms,
                       SortedMap<String, Meter> meters,
                       SortedMap<String, Timer> timers) {
        log.info("reporting to influx with InfluxDB : {}", influxDB);
        influxDB.createDatabase(database);
        List<Point> counterPoints = reportCounters(counters);
        List<Point> gaugePoints = reportGauges(gauges);
        List<Point> meterPoints = reportMeters(meters);
        List<Point> timerPoints = reportTimers(timers);
        List<Point> histogramPoints = reportHistograms(histograms);
        List<Point> points = Stream.of(counterPoints, gaugePoints, meterPoints, timerPoints, histogramPoints).flatMap
                (List::stream)
                .collect(Collectors.toList());
        final BatchPoints batchPoints = BatchPoints.database(database)
                .points(points.toArray(new Point[0]))
                .consistency(InfluxDB.ConsistencyLevel
                        .ALL)
                .time(System.currentTimeMillis(), TimeUnit.SECONDS)
                .build();
        log.info("sending {} points", points.size());
        influxDB.write(batchPoints);
    }

    private List<Point> reportHistograms(SortedMap<String, Histogram> histograms) {
        List<Point> histogramMetrics = new ArrayList<>();
        histograms.entrySet().stream().forEach(histogram -> {
            Set<Field> fields = new HashSet<>();
            fields.add(field("histogram.count",
                    histogram.getValue().getCount()));
            fields.add(field("histogram.percentile.75",
                    histogram.getValue().getSnapshot().get75thPercentile()));
            fields.add(field("histogram.percentile.95",
                    histogram.getValue().getSnapshot().get95thPercentile()));
            fields.add(field("histogram.percentile.98",
                    histogram.getValue().getSnapshot().get98thPercentile()));
            fields.add(field("histogram.percentile.999",
                    histogram.getValue().getSnapshot().get999thPercentile()));
            fields.add(field("histogram.percentile.99",
                    histogram.getValue().getSnapshot().get99thPercentile()));
            fields.add(field("histogram.max",
                    histogram.getValue().getSnapshot().getMax()));
            fields.add(field("histogram.min",
                    histogram.getValue().getSnapshot().getMin()));
            fields.add(field("histogram.mean",
                    histogram.getValue().getSnapshot().getMean()));
            fields.add(field("histogram.median",
                    histogram.getValue().getSnapshot().getMedian()));
            histogramMetrics.add(point(histogram.getKey(), fields));
        });
        return histogramMetrics;

    }

    private List<Point> reportTimers(SortedMap<String, Timer> timers) {
        List<Point> timerMetrics = new ArrayList<>();
        timers.entrySet().stream().forEach(timer -> {
            Set<Field> fields = new HashSet<>();
            fields.add(field("timer.count",
                    timer.getValue().getCount()));
            fields.add(field("timer.15min.rate",
                    timer.getValue().getFifteenMinuteRate()));
            fields.add(field("timer.5min.rate",
                    timer.getValue().getFiveMinuteRate()));
            fields.add(field("timer.mean.rate",
                    timer.getValue().getMeanRate()));
            fields.add(field("timer.1min.rate",
                    timer.getValue().getOneMinuteRate()));
            fields.add(field("timer.percentile.75",
                    timer.getValue().getSnapshot().get75thPercentile()));
            fields.add(field("timer.percentile.95",
                    timer.getValue().getSnapshot().get95thPercentile()));
            fields.add(field("timer.percentile.98",
                    timer.getValue().getSnapshot().get98thPercentile()));
            fields.add(field("timer.percentile.999",
                    timer.getValue().getSnapshot().get999thPercentile()));
            fields.add(field("timer.percentile.99",
                    timer.getValue().getSnapshot().get99thPercentile()));
            fields.add(field("timer.max",
                    timer.getValue().getSnapshot().getMax()));
            fields.add(field("timer.min",
                    timer.getValue().getSnapshot().getMin()));
            fields.add(field(
                    "timer.mean",
                    timer.getValue().getSnapshot().getMean()));
            fields.add(field("timer.median",
                    timer.getValue().getSnapshot().getMedian()));
            timerMetrics.add(point(timer.getKey(), fields));
        });
        return timerMetrics;
    }

    private List<Point> reportGauges(SortedMap<String, Gauge> gauges) {
        return gauges.entrySet().stream().map(entry -> point(entry.getKey(),
                Collections.singleton(field("gauge",
                        entry.getValue().getValue())))).collect(
                Collectors
                        .toList());
    }

    private List<Point> reportCounters(SortedMap<String, Counter> counters) {
        return counters.entrySet().stream().map(entry -> point(entry.getKey(),
                Collections.singleton(field("counter", entry
                        .getValue()
                        .getCount
                                ())))).collect(
                Collectors
                        .toList());
    }

    private List<Point> reportMeters(SortedMap<String, Meter> meters) {
        List<Point> meterMetrics = new ArrayList<>();
        meters.entrySet().stream().forEach(meter -> {
            Set<Field> fields = new HashSet<>();
            fields.add(field("meter.count",
                    meter.getValue().getCount()));
            fields.add(field("meter.15min.rate",
                    meter.getValue().getFifteenMinuteRate()));
            fields.add(field("meter.5min.rate",
                    meter.getValue().getFiveMinuteRate()));
            fields.add(field("meter.mean.rate",
                    meter.getValue().getMeanRate()));
            fields.add(field("meter.1min.rate",
                    meter.getValue().getOneMinuteRate()));
            meterMetrics.add(point(meter.getKey(), fields));
        });
        return meterMetrics;
    }

    private Field field(String key, Object value) {
        return new Field(key, value);
    }

    private Point point(String name, Set<Field> fields) {
        final Point.Builder pointBuilder = Point.
                measurement(name)
                .time(System.currentTimeMillis(), TimeUnit.SECONDS);
        fields.stream().forEach(field -> pointBuilder.field(field.getName(), field.getValue()));
        return pointBuilder.build();
    }
}
