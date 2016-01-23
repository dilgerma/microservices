package de.effectivetrainings.billy.reporting.domain.repository;

import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.ReportExpense;
import de.effectivetrainings.billy.reporting.domain.ReportInvoice;
import de.effectivetrainings.billy.reporting.domain.ReportPeriod;
import de.effectivetrainings.billy.reporting.rest.inbound.ReportingInboundModelMapper;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.ExpensePeriodFilter;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.InvoicePeriodFilter;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoices;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;
import java.util.List;

/**
 *
 */
@Slf4j
public class IncomeReportRepository {


    private final RestDataSource<Expenses> expenseDataSource;
    private final RestDataSource<Invoices> invoiceDataSource;

    private ReportingInboundModelMapper reportingInboundModelMapper;

    public IncomeReportRepository(RestDataSource<Invoices> invoiceDataSource, RestDataSource<Expenses> expenseDataSource, ReportingInboundModelMapper reportingInboundModelMapper) {
        this.expenseDataSource = expenseDataSource;
        this.invoiceDataSource = invoiceDataSource;
        this.reportingInboundModelMapper = reportingInboundModelMapper;
    }

    public Report loadReport(ReportPeriod reportPeriod) {
        List<ReportInvoice> invoices = reportingInboundModelMapper.toInvoices(invoiceDataSource.get(new InvoicePeriodFilter(reportPeriod.getFrom(), reportPeriod.getTo())).getInvoices());
        List<ReportExpense> expenses = reportingInboundModelMapper.toExpenses(expenseDataSource.get(new ExpensePeriodFilter(reportPeriod.getFrom(), reportPeriod.getTo())).getExpenses());
        return new Report(invoices, expenses);
    }
}
