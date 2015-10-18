package de.effectivetrainings.influx;

import com.codahale.metrics.*;
import lombok.extern.slf4j.Slf4j;
import org.influxdb.InfluxDB;
import org.influxdb.dto.BatchPoints;
import org.influxdb.dto.Point;

import java.util.ArrayList;
import java.util.List;
import java.util.SortedMap;
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
        this(registry, name, MetricFilter.ALL, TimeUnit.SECONDS, TimeUnit.SECONDS, influxDB, database);
    }

    @Override
    public void report(SortedMap<String, Gauge> gauges,
                       SortedMap<String, Counter> counters,
                       SortedMap<String, Histogram> histograms,
                       SortedMap<String, Meter> meters,
                       SortedMap<String, Timer> timers) {
        log.info("reporting to influx");
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
                .build();
        log.info("sending {} points", points.size());
        influxDB.write(batchPoints);
    }

    private List<Point> reportHistograms(SortedMap<String, Histogram> histograms) {
        List<Point> histogramMerics = new ArrayList<>();
        histograms.entrySet().stream().forEach(histogram -> {
            histogramMerics.add(point(histogram.getKey(), "histogram.count",
                    histogram.getValue().getCount()));
            histogramMerics.add(point(histogram.getKey(), "histogram.percentile.75",
                    histogram.getValue().getSnapshot().get75thPercentile()));
            histogramMerics.add(point(histogram.getKey(), "histogram.percentile.95",
                    histogram.getValue().getSnapshot().get95thPercentile()));
            histogramMerics.add(point(histogram.getKey(), "histogram.percentile.98",
                    histogram.getValue().getSnapshot().get98thPercentile()));
            histogramMerics.add(point(histogram.getKey(), "histogram.percentile.999",
                    histogram.getValue().getSnapshot().get999thPercentile()));
            histogramMerics.add(point(histogram.getKey(), "histogram.percentile.99",
                    histogram.getValue().getSnapshot().get99thPercentile()));
            histogramMerics.add(point(histogram.getKey(), "histogram.max",
                    histogram.getValue().getSnapshot().getMax()));
            histogramMerics.add(point(histogram.getKey(), "histogram.min",
                    histogram.getValue().getSnapshot().getMin()));
            histogramMerics.add(point(histogram.getKey(),
                    "histogram.mean",
                    histogram.getValue().getSnapshot().getMean()));
            histogramMerics.add(point(histogram.getKey(),
                    "histogram.median",
                    histogram.getValue().getSnapshot().getMedian()));
        });
        return histogramMerics;

    }

    private List<Point> reportTimers(SortedMap<String, Timer> timers) {
        List<Point> timerMetrics = new ArrayList<>();
        timers.entrySet().stream().forEach(timer -> {
            timerMetrics.add(point(timer.getKey(), "timer.count",
                    timer.getValue().getCount()));
            timerMetrics.add(point(timer.getKey(), "timer.15min.rate",
                    timer.getValue().getFifteenMinuteRate()));
            timerMetrics.add(point(timer.getKey(), "timer.5min.rate",
                    timer.getValue().getFiveMinuteRate()));
            timerMetrics.add(point(timer.getKey(), "timer.mean.rate",
                    timer.getValue().getMeanRate()));
            timerMetrics.add(point(timer.getKey(), "timer.1min.rate",
                    timer.getValue().getOneMinuteRate()));
            timerMetrics.add(point(timer.getKey(), "timer.percentile.75",
                    timer.getValue().getSnapshot().get75thPercentile()));
            timerMetrics.add(point(timer.getKey(), "timer.percentile.95",
                    timer.getValue().getSnapshot().get95thPercentile()));
            timerMetrics.add(point(timer.getKey(), "timer.percentile.98",
                    timer.getValue().getSnapshot().get98thPercentile()));
            timerMetrics.add(point(timer.getKey(), "timer.percentile.999",
                    timer.getValue().getSnapshot().get999thPercentile()));
            timerMetrics.add(point(timer.getKey(), "timer.percentile.99",
                    timer.getValue().getSnapshot().get99thPercentile()));
            timerMetrics.add(point(timer.getKey(), "timer.max",
                    timer.getValue().getSnapshot().getMax()));
            timerMetrics.add(point(timer.getKey(), "timer.min",
                    timer.getValue().getSnapshot().getMin()));
            timerMetrics.add(point(timer.getKey(),
                    "timer.mean",
                    timer.getValue().getSnapshot().getMean()));
            timerMetrics.add(point(timer.getKey(),
                    "timer.median",
                    timer.getValue().getSnapshot().getMedian()));
        });
        return timerMetrics;
    }

    private List<Point> reportGauges(SortedMap<String, Gauge> gauges) {
        return gauges.entrySet().stream().map(entry -> point(entry.getKey(),
                "gauge",
                entry.getValue().getValue())).collect(
                Collectors
                        .toList());
    }

    private List<Point> reportCounters(SortedMap<String, Counter> counters) {
        return counters.entrySet().stream().map(entry -> point(entry.getKey(), "counter", entry.getValue().getCount
                ())).collect(
                Collectors
                        .toList());
    }

    private List<Point> reportMeters(SortedMap<String, Meter> meters) {
        List<Point> meterMetrics = new ArrayList<>();
        meters.entrySet().stream().forEach(meter -> {
            meterMetrics.add(point(meter.getKey(), "meter.count",
                    meter.getValue().getCount()));
            meterMetrics.add(point(meter.getKey(), "meter.15min.rate",
                    meter.getValue().getFifteenMinuteRate()));
            meterMetrics.add(point(meter.getKey(), "meter.5min.rate",
                    meter.getValue().getFiveMinuteRate()));
            meterMetrics.add(point(meter.getKey(), "meter.mean.rate",
                    meter.getValue().getMeanRate()));
            meterMetrics.add(point(meter.getKey(), "meter.1min.rate",
                    meter.getValue().getOneMinuteRate()));
        });
        return meterMetrics;
    }


    private Point point(String name, String fieldName, Object value) {
        return Point.
                measurement(name)
                .time(System.currentTimeMillis(), TimeUnit.MILLISECONDS).
                        field(fieldName, value).build();
    }
}
