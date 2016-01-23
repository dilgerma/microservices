package de.effectivetrainings.billy.billing.rest.filter;

import de.effectivetrainings.billy.billing.domain.Invoice;
import de.effectivetrainings.billy.billing.domain.Invoices;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Slf4j
public class InvoicePaidDateFilter {

    private LocalDate from;
    private LocalDate to;

    public InvoicePaidDateFilter(LocalDate from, LocalDate to) {
        this.from = from;
        this.to = to;
    }

    public Invoices apply(Invoices invoices) {
        if (invoices == null || invoices.getInvoices() == null) {
            log.warn("Received empty invoice body");
            return new Invoices(new ArrayList<>());
        }
        log.debug("Filtering invoices : {}", invoices.getInvoices());
        return new Invoices(invoices.getInvoices().stream().filter(Invoice::isPaid).filter(invoice -> !invoice.isCancelled()).filter(invoice -> (from == null || from.isBefore(invoicePaidDate(invoice))) && (to == null || to.isAfter(invoicePaidDate(invoice)))).collect(Collectors.toList()));
    }

    private LocalDate invoicePaidDate(Invoice invoice) {
        return invoice.getPaidDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }

}
