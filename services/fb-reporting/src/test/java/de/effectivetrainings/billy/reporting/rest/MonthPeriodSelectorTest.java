package de.effectivetrainings.billy.reporting.rest;

import org.junit.Test;

import java.time.Month;

import static org.junit.Assert.*;

public class MonthPeriodSelectorTest {

    @Test
    public void testCurrent() {
        assertTrue(MonthPeriodSelector.of("current").isCurrent());
    }

    @Test
    public void testLast() {
        assertTrue(MonthPeriodSelector.of("last").isLast());
    }

    @Test
    public void testInvalid() {
        assertFalse(MonthPeriodSelector.of("something").isValid());
    }

    @Test
    public void testMonth() {
        MonthPeriodSelector monthPeriodSelector = MonthPeriodSelector.of("5");
        assertTrue(monthPeriodSelector.isMonth());
        assertTrue(monthPeriodSelector.getMonth().isPresent());
        assertEquals(Month.MAY, monthPeriodSelector.getMonth().get());
    }

    @Test
    public void testInvalidMonth() {
        assertFalse(MonthPeriodSelector.of("-1").isValid());
        assertFalse(MonthPeriodSelector.of("13").isValid());
        assertTrue(MonthPeriodSelector.of("12").isValid());
        assertTrue(MonthPeriodSelector.of("1").isValid());
    }

}