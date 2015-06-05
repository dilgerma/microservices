package de.effectivetrainings.billy.reporting.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collections;
import java.util.List;

/**
 *
 */
public class Report {

    @JsonProperty("invoices")
    private final List<ReportInvoice> reportInvoices;
    @JsonProperty("expenses")
    private List<ReportExpense> reportExpenses;

    public Report(List<ReportInvoice> reportInvoices, List<ReportExpense> reportExpenses) {
        this.reportExpenses = Collections.unmodifiableList(reportExpenses);
        this.reportInvoices = Collections.unmodifiableList(reportInvoices);
    }

    @JsonProperty("total")
    public Amount getTotal() {
        Amount invoiceAmount  =  reportInvoices.stream().map(ReportInvoice::getAmountValue).reduce(new Amount(0d, 0d, 0d), (result, next) -> result.add(next));
        Amount expenseAmount = reportExpenses.stream().map(ReportExpense::getAmountValue).reduce(new Amount(0d,0d,0d), (result, next)-> result.add(next));
        return invoiceAmount.minus(expenseAmount);
    }
}
