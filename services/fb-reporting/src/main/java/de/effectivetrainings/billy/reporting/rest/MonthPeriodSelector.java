package de.effectivetrainings.billy.reporting.rest;

import de.effectivetrainings.billy.reporting.domain.ReportPeriod;
import org.apache.commons.lang.math.NumberUtils;

import java.time.Month;
import java.util.Optional;

public class MonthPeriodSelector {

    private static final String CURRENT = "current";
    private static final String LAST = "last";

    private String monthSelector;

    private MonthPeriodSelector(String selector) {
        this.monthSelector = selector;
    }

    public static final MonthPeriodSelector of(String monthSelector) {
        return new MonthPeriodSelector(monthSelector);
    }

    public boolean isCurrent() {
        return CURRENT.equals(monthSelector);
    }

    public boolean isLast() {
        return LAST.equals(monthSelector);
    }

    public boolean isMonth() {
        return NumberUtils.isDigits(monthSelector) && Integer.parseInt(monthSelector) >= 1 && Integer.parseInt(monthSelector) <= 12;
    }

    public ReportPeriod getPeriod() {
        if (isCurrent()) {
            return ReportPeriod.currentMonth();
        } else if (isLast()) {
            return ReportPeriod.lastMonth();
        } else if (isMonth()) {
            return ReportPeriod.withMonthInCurrentYear(getMonth().get().getValue());
        } else {
            return ReportPeriod.empty();
        }
    }

    public Optional<Month> getMonth() {
        if (isMonth()) {
            return Optional.of(Month.of(Integer.parseInt(monthSelector)));
        }
        return Optional.empty();
    }

    public boolean isValid() {
        return isCurrent() || isLast() || isMonth();
    }
}
