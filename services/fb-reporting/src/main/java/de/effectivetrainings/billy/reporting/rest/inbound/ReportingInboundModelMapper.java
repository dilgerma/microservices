package de.effectivetrainings.billy.reporting.rest.inbound;

import de.effectivetrainings.billy.reporting.domain.Amount;
import de.effectivetrainings.billy.reporting.domain.ReportExpense;
import de.effectivetrainings.billy.reporting.domain.ReportInvoice;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expense;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.ExpenseAmount;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoice;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.InvoiceAmount;

import java.util.List;
import java.util.stream.Collectors;

/**
 *
 */
public class ReportingInboundModelMapper {

    public List<ReportInvoice> toInvoices(List<Invoice> invoices) {
        return invoices.stream().map(invoice -> toInvoice(invoice)).collect(Collectors.toList());
    }

    public ReportInvoice toInvoice(Invoice invoice) {
        ReportInvoice invoicePart = new ReportInvoice(invoice.getInvoiceNumber(), toAmount(invoice.getAmountValue()), invoice.getOrganization(), invoice.getPaidDate());
        return invoicePart;
    }

    public List<ReportExpense> toExpenses(List<Expense> expenses) {
        return expenses.stream().map(expense -> toExpense(expense)).collect(Collectors.toList());
    }

    public ReportExpense toExpense(Expense expense) {
        ReportExpense reportExpense = new ReportExpense(expense.getInvoiceNumber(), toAmount(expense.getAmountValue()), expense.getOrganization(), expense.getPaidDate());
        return reportExpense;
    }

    private Amount toAmount(InvoiceAmount amountValue) {
        return new Amount(amountValue.getSubTotal(), amountValue.getVatTotal(), amountValue.getTotal());
    }

    private Amount toAmount(ExpenseAmount expenseAmount) {
        return new Amount(expenseAmount.getSubTotal(), expenseAmount.getVatTotal(), expenseAmount.getTotal());
    }


}
