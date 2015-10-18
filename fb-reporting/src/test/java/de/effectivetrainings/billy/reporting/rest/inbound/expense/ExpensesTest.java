package de.effectivetrainings.billy.reporting.rest.inbound.expense;

import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertFalse;
import static org.mockito.Mockito.mock;

public class ExpensesTest {

    @Test
    public void testIt() {
        assertFalse(new Expenses(Arrays.asList(mock(Expense.class))).getExpenses().isEmpty());
    }
}