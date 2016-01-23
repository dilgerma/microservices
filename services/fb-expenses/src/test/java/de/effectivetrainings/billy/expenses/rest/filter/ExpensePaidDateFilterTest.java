package de.effectivetrainings.billy.expenses.rest.filter;

import de.effectivetrainings.billy.expenses.domain.Amount;
import de.effectivetrainings.billy.expenses.domain.Expense;
import org.junit.Test;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class ExpensePaidDateFilterTest {
    @Test
    public void filterInvoiceFiltersNonPaidInvoices() {

        Expense expense = mock(Expense.class);
        when(expense.isPaid()).thenReturn(false);

        assertTrue(invoiceFilter().apply(Arrays.asList(expense)).isEmpty());
    }

    @Test
    public void acceptsInvoicesPaidInConfiguredTimePeriod() {

        Expense expense = new Expense("orga", "4811", new Date(), new Date(), new Amount(0d, 0d, 0d), "");
        assertTrue(expense.isPaid());
        assertTrue(invoiceFilter().apply(Arrays.asList(expense)).contains(expense));
    }

    @Test
    public void filterInvoiceFiltersOutsideOfTimePeriod() {

        Expense expense = new Expense("orga", "4811", new Date(), Date.from(LocalDate.now().minusYears(2).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()), new Amount(0d, 0d, 0d), "");

        assertTrue(expense.isPaid());
        assertTrue(invoiceFilter().apply(Arrays.asList(expense)).isEmpty());

    }

    private ExpensePaidDateFilter invoiceFilter() {
        return new ExpensePaidDateFilter(LocalDate.now().minusYears(1), LocalDate.now().plusYears(1));
    }

}