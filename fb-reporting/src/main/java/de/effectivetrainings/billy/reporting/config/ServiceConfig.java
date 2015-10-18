package de.effectivetrainings.billy.reporting.config;

import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import de.effectivetrainings.billy.reporting.domain.repository.RestDataSource;
import de.effectivetrainings.billy.reporting.rest.inbound.ReportingInboundModelMapper;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoices;
import de.effectivetrainings.support.rest.UserRestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Configuration
public class ServiceConfig {

    @Bean
    @InvoiceDataSourceQualifier
    public RestDataSource<Invoices> invoices(@Value("${fb.invoices.uri}") URI invoiceUri,@UserRestTemplate RestTemplate restTemplate) {
        return new RestDataSource<>(invoiceUri, restTemplate, Invoices.class);
    }

    @Bean
    @ExpenseDataSourceQualifier
    public RestDataSource<Expenses> expenses(@Value("${fb.expenses.uri}") URI expenseUri,@UserRestTemplate RestTemplate restTemplate) {
        return new RestDataSource<>(expenseUri, restTemplate, Expenses.class);
    }

    @Bean
    public IncomeReportRepository incomeReportRepository(@InvoiceDataSourceQualifier RestDataSource<Invoices> invoiceDataSource, @ExpenseDataSourceQualifier RestDataSource<Expenses> expensesRestDataSource) {
        return new IncomeReportRepository(invoiceDataSource, expensesRestDataSource, new ReportingInboundModelMapper());
    }
}
