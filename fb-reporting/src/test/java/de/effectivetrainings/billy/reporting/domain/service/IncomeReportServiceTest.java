package de.effectivetrainings.billy.reporting.domain.service;

import com.google.common.collect.Lists;
import de.effectivetrainings.billy.reporting.domain.Amount;
import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.ReportExpense;
import de.effectivetrainings.billy.reporting.domain.ReportInvoice;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

/**
 *
 */
public class IncomeReportServiceTest {

    private IncomeReportService incomeReportService = new IncomeReportService();

    @Test
    public void calculatesExpenseTotals() {
        ReportInvoice reportInvoice = new ReportInvoice("4711", new Amount(4d, 5d, 9d), "orga", new Date());

        Report report = incomeReportService.calculate(Lists.newArrayList(reportInvoice), Lists.newArrayList());
        assertEquals(reportInvoice.getAmountValue(), report.getTotal());
    }

    @Test
    public void calculatesExpenseAndInvoiceTotals() {
        ReportInvoice reportInvoice = new ReportInvoice("4711", new Amount(4d, 5d, 9d), "orga", new Date());
        ReportInvoice reportInvoice2 = new ReportInvoice("4711", new Amount(4d, 5d, 9d), "orga", new Date());
        ReportExpense reportExpense = new ReportExpense("4811", new Amount(2d, 7d, 11d), "orga", new Date());

        Report report = incomeReportService.calculate(Lists.newArrayList(reportInvoice, reportInvoice2), Lists.newArrayList(reportExpense));

        assertNotEquals(reportInvoice.getAmountValue(), report.getTotal());
        assertEquals(reportInvoice.getAmountValue().add(reportInvoice2.getAmountValue()).minus(reportExpense.getAmountValue()), report.getTotal());
    }
}