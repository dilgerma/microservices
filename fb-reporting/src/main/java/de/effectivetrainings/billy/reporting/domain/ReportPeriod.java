package de.effectivetrainings.billy.reporting.domain;

import lombok.Getter;

import java.time.LocalDate;
import java.time.Year;
import java.util.Objects;

@Getter
public class ReportPeriod {

    private LocalDate from;
    private LocalDate to;

    private ReportPeriod(LocalDate from, LocalDate to) {
        this.from = from;
        this.to = to;
    }

    public static ReportPeriod currentMonth() {
        return startEndOfMonth(LocalDate.now());
    }

    public static ReportPeriod lastMonth() {
        return startEndOfMonth(LocalDate.now().minusMonths(1L));
    }

    public static ReportPeriod currentYear() {
        return startEndOfYear(LocalDate.now());
    }

    public static final ReportPeriod lastYear() {
        return startEndOfYear(LocalDate.now().minusYears(1));
    }

    public static final ReportPeriod withMonthInCurrentYear(int month) {
        return startEndOfMonth(LocalDate.now().withMonth(month));
    }

    private static ReportPeriod startEndOfYear(LocalDate base) {
        LocalDate from = base.withDayOfYear(1);
        LocalDate to = base.withDayOfYear(Year.from(base).length());
        return new ReportPeriod(from, to);
    }

    private static ReportPeriod startEndOfMonth(LocalDate base) {
        LocalDate from = base.withDayOfMonth(1);
        LocalDate to = base.withDayOfMonth(base.getMonth().length(Year.from(base).isLeap()));
        return new ReportPeriod(from, to);
    }

    public static ReportPeriod of(LocalDate from, LocalDate to) {
        return new ReportPeriod(from, to);
    }

    public static ReportPeriod empty() {
        return new ReportPeriod(null, null);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReportPeriod)) return false;
        ReportPeriod period = (ReportPeriod) o;
        return Objects.equals(from, period.from) &&
                Objects.equals(to, period.to);
    }

    @Override
    public int hashCode() {
        return Objects.hash(from, to);
    }
}
