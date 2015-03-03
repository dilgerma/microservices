package de.effectivetrainings.fastbill.json;


import de.effectivetrainings.billing.domain.Time;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TimeTest {

    @Test
    public void calculateBillableHours() {

        Time time = new Time();
        time.setBillableMinutes(45);
        assertEquals(0.75d, time.getBillableHours(),0);
    }
}