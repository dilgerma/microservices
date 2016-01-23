package de.effectivetrainings.billy.reporting.domain;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 *
 */
public class AmountTest {

    @Test
    public void addAmounts() {
        Amount existing = new Amount(5d, 2d, 7d);

        Amount expected = new Amount(existing.getSubTotal()*2, existing.getVatTotal() *2, existing.getTotal() *2);
        final Amount added = existing.add(existing);
        assertEquals(expected, added);
        assertEquals("state is not altered", new Amount(5d, 2d, 7d), existing);
    }

    @Test
    public void subtractAmounts() {
        Amount existing = new Amount(5d, 2d, 7d);

        Amount expected = new Amount(0d, 0d, 0d);
        Amount subtracted = existing.minus(existing);
        assertEquals(expected, subtracted);
        assertEquals("state is not altered", new Amount(5d, 2d, 7d), existing);

    }

}