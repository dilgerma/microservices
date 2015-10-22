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
                .retentionPolicy("30d")
                .time(System.currentTimeMillis(), TimeUnit.SECONDS)
                .build();
        log.info("sending {} points", points.size());
        influxDB.write(batchPoints);
    }

    private List<Point> reportHistograms(SortedMap<String, Histogram> histograms) {
        List<Point> histogramMetrics = new ArrayList<>();
        histograms.entrySet().stream().forEach(histogram -> {
            Set<InfluxField> fields = new HashSet<>();
            fields.add(field("count",
                    histogram.getValue().getCount()));
            fields.add(field("p75",
                    histogram.getValue().getSnapshot().get75thPercentile()));
            fields.add(field("p95",
                    histogram.getValue().getSnapshot().get95thPercentile()));
            fields.add(field("p98",
                    histogram.getValue().getSnapshot().get98thPercentile()));
            fields.add(field("p999",
                    histogram.getValue().getSnapshot().get999thPercentile()));
            fields.add(field("p99",
                    histogram.getValue().getSnapshot().get99thPercentile()));
            fields.add(field("max",
                    histogram.getValue().getSnapshot().getMax()));
            fields.add(field("min",
                    histogram.getValue().getSnapshot().getMin()));
            fields.add(field("mean",
                    histogram.getValue().getSnapshot().getMean()));
            fields.add(field("median",
                    histogram.getValue().getSnapshot().getMedian()));
            histogramMetrics.add(point(histogram.getKey(), fields));
        });
        return histogramMetrics;

    }

    private List<Point> reportTimers(SortedMap<String, Timer> timers) {
        List<Point> timerMetrics = new ArrayList<>();
        timers.entrySet().stream().forEach(timer -> {
            Set<InfluxField> fields = new HashSet<>();
            fields.add(field("count",
                    convertDuration(timer.getValue().getCount())));
            fields.add(field("m15_rate",
                    convertDuration(timer.getValue().getFifteenMinuteRate())));
            fields.add(field("m5_rate",
                    convertDuration(timer.getValue().getFiveMinuteRate())));
            fields.add(field("mean_rate",
                    convertDuration(timer.getValue().getMeanRate())));
            fields.add(field("m1_rate",
                    convertDuration(timer.getValue().getOneMinuteRate())));
            fields.add(field("p75",
                    convertDuration(timer.getValue().getSnapshot().get75thPercentile())));
            fields.add(field("p95",
                    convertDuration(timer.getValue().getSnapshot().get95thPercentile())));
            fields.add(field("p98",
                    convertDuration(timer.getValue().getSnapshot().get98thPercentile())));
            fields.add(field("p999",
                    convertDuration(timer.getValue().getSnapshot().get999thPercentile())));
            fields.add(field("p99",
                    convertDuration(timer.getValue().getSnapshot().get99thPercentile())));
            fields.add(field("max",
                    convertDuration(timer.getValue().getSnapshot().getMax())));
            fields.add(field("min",
                    convertDuration(timer.getValue().getSnapshot().getMin())));
            fields.add(field(
                    "mean",
                    convertDuration(timer.getValue().getSnapshot().getMean())));
            fields.add(field("median",
                    convertDuration(timer.getValue().getSnapshot().getMedian())));
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
            Set<InfluxField> fields = new HashSet<>();
            fields.add(field("count",
                    meter.getValue().getCount()));
            fields.add(field("m15",
                    meter.getValue().getFifteenMinuteRate()));
            fields.add(field("m5",
                    meter.getValue().getFiveMinuteRate()));
            fields.add(field("mean",
                    meter.getValue().getMeanRate()));
            fields.add(field("m1",
                    meter.getValue().getOneMinuteRate()));
            meterMetrics.add(point(meter.getKey(), fields));
        });
        return meterMetrics;
    }

    private InfluxField field(String key, Object value) {
        return new InfluxField(key, value);
    }

    private Point point(String name, Set<InfluxField> fields) {
        final Point.Builder pointBuilder = Point.
                measurement(name)
                .time(System.currentTimeMillis(), TimeUnit.SECONDS);
        fields.stream().forEach(field -> pointBuilder.field(field.getName(), field.getValue()));
        return pointBuilder.build();
    }
}
