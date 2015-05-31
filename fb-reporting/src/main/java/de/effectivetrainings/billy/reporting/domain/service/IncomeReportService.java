package de.effectivetrainings.billy.reporting.domain.service;

import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.ReportExpense;
import de.effectivetrainings.billy.reporting.domain.ReportInvoice;

import java.util.List;

/**
 *
 */
public class IncomeReportService {

    public IncomeReportService() {}

    public Report calculate(List<ReportInvoice> invoices, List<ReportExpense> expenses)
    {
        return new Report(invoices, expenses);
    }
}
