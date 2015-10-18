package de.effectivetrainings.billy.reporting.rest.outbound;

import de.effectivetrainings.billy.reporting.domain.Amount;
import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.ReportExpense;
import de.effectivetrainings.billy.reporting.domain.ReportInvoice;

import java.util.stream.Collectors;

public class ReportingOutboundModelMapper {

    public ReportValue toReport(Report report) {
        ReportValue reportValue = new ReportValue(toAmountValue(report.getTotal()),  report.getReportInvoices().stream().map(invoice -> toReportItem(invoice)).collect(Collectors.toList()), report.getReportExpenses().stream().map(expense -> toReportItem(expense)).collect(Collectors.toList()));
        return reportValue;
    }

    private ReportItemValue toReportItem(ReportInvoice reportInvoice) {
        return new ReportItemValue(reportInvoice.getInvoiceNumber(), toAmountValue(reportInvoice.getAmountValue()), reportInvoice.getOrganization());
    }

    private ReportItemValue toReportItem(ReportExpense reportExpense) {
            return new ReportItemValue(reportExpense.getInvoiceNumber(), toAmountValue(reportExpense.getAmountValue()), reportExpense.getOrganization());
        }

    private AmountValue toAmountValue(Amount total) {
        return new AmountValue(total.getVatTotal(), total.getSubTotal(), total.getTotal());
    }

}


