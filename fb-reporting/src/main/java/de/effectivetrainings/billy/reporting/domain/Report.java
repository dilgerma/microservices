package de.effectivetrainings.billy.reporting.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.Collections;
import java.util.List;

/**
 *
 */
@Getter
public class Report {

    @JsonProperty("reportInvoices")
    private final List<ReportInvoice> reportInvoices;
    @JsonProperty("reportExpenses")
    private List<ReportExpense> reportExpenses;

    public Report(List<ReportInvoice> reportInvoices, List<ReportExpense> reportExpenses) {
        this.reportExpenses = Collections.unmodifiableList(reportExpenses);
        this.reportInvoices = Collections.unmodifiableList(reportInvoices);
    }

}
