package de.effectivetrainings.billy.billing.rest.filter;

import de.effectivetrainings.billy.billing.domain.Amount;
import de.effectivetrainings.billy.billing.domain.Invoice;
import de.effectivetrainings.billy.billing.domain.Invoices;
import org.junit.Test;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Arrays;
import java.util.Date;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class InvoicePaidDateFilterTest {

    @Test
    public void filterInvoiceFiltersNonPaidInvoices() {

        Invoice invoice = mock(Invoice.class);
        when(invoice.isPaid()).thenReturn(false);

        assertTrue(invoiceFilter().apply(new Invoices(Arrays.asList(invoice))).getInvoices().isEmpty());

    }

    @Test
    public void filterInvoiceFiltersCancelledInvoices() {

        Invoice invoice = mock(Invoice.class);
        when(invoice.isCancelled()).thenReturn(true);
        when(invoice.isPaid()).thenReturn(true);

        assertTrue(invoiceFilter().apply(new Invoices(Arrays.asList(invoice))).getInvoices().isEmpty());

    }

    @Test
    public void acceptsInvoicesPaidInConfiguredTimePeriod() {

        Invoice invoice = new Invoice("4811", new Amount(0d, 0d, 0d), "orga", new Date(), new Date(), false);
        assertTrue(invoice.isPaid());

        assertTrue(invoiceFilter().apply(new Invoices(Arrays.asList(invoice))).getInvoices().contains(invoice));

    }

    @Test
    public void filterInvoiceFiltersOutsideOfTimePeriod() {

        Invoice invoice = new Invoice("4811", new Amount(0d, 0d, 0d), "orga", new Date(), Date.from(LocalDate.now().minusYears(2).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant()), false);
        assertTrue(invoice.isPaid());
        assertTrue(invoiceFilter().apply(new Invoices(Arrays.asList(invoice))).getInvoices().isEmpty());

    }

    private InvoicePaidDateFilter invoiceFilter() {
        return new InvoicePaidDateFilter(LocalDate.now().minusYears(1), LocalDate.now().plusYears(1));
    }
}