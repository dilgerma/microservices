package de.effectivetrainings.billy.reporting.domain;

import java.util.Collections;
import java.util.List;

/**
 *
 */
public class Report {

    private final List<ReportInvoice> reportInvoices;
    private List<ReportExpense> reportExpenses;

    public Report(List<ReportInvoice> reportInvoices, List<ReportExpense> reportExpenses) {
        this.reportExpenses = Collections.unmodifiableList(reportExpenses);
        this.reportInvoices = Collections.unmodifiableList(reportInvoices);
    }

    public List<ReportInvoice> getReportInvoices() {
        return reportInvoices;
    }

    public List<ReportExpense> getReportExpenses() {
        return reportExpenses;
    }

    public Amount getTotal() {
        Amount invoiceAmount  =  reportInvoices.stream().map(ReportInvoice::getAmountValue).reduce(new Amount(0d, 0d, 0d), (result, next) -> result.add(next));
        Amount expenseAmount = reportExpenses.stream().map(ReportExpense::getAmountValue).reduce(new Amount(0d,0d,0d), (result, next)-> result.add(next));
        return invoiceAmount.minus(expenseAmount);
    }
}
