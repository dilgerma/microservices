package de.effectivetrainings.billy.reporting.domain.repository;

import de.effectivetrainings.billy.reporting.domain.Amount;
import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.rest.inbound.ReportingInboundModelMapper;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expense;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.ExpenseAmount;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoice;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.InvoiceAmount;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoices;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class IncomeReportRepositoryTest {

    @Mock
    private RestDataSource<Expenses> expensesDataSource;
    @Mock
    private RestDataSource<Invoices> invoiceDataSource;

    private IncomeReportRepository incomeReportRepository;

    @Before
    public void setUp() {
        mockExpenseInvoices();

        incomeReportRepository = new IncomeReportRepository(invoiceDataSource, expensesDataSource, new ReportingInboundModelMapper());
    }

    @Test
    public void calculatesExpenseAndInvoiceTotals() {

        Report report = incomeReportRepository.loadReport();

        verify(invoiceDataSource).get();
        verify(expensesDataSource).get();
        //invoice minus expense
        assertEquals(new Amount(81d, 19d, 100d), report.getTotal());
    }


    private void mockExpenseInvoices() {
          Expense expense = new Expense("orga", "expenseNumber", new Date(), new Date(), new ExpenseAmount(19d, 81d, 100d), "");
          Expenses expenses = new Expenses(Arrays.asList(expense));
          when(expensesDataSource.get()).thenReturn(expenses);

          Invoice invoice = new Invoice("invoiceNumber", new InvoiceAmount(38d, 162d, 200d), "orga", new Date(), new Date(), false);
          Invoices invoices = new Invoices(Arrays.asList(invoice));
          when(invoiceDataSource.get()).thenReturn(invoices);
      }
}