package de.effectivetrainings.billy.reporting.config;

import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import de.effectivetrainings.billy.reporting.domain.repository.RestDataSource;
import de.effectivetrainings.billy.reporting.rest.inbound.ReportingInboundModelMapper;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Configuration
public class ServiceConfig {

    @Autowired
    @Qualifier("userRestTemplate")
    private RestOperations restOperations;

    @Value("${fb.expenses.uri}")
    private URI expenseUri;

    @Value("${fb.invoices.uri}") private URI invoiceUri;

    @Bean
    @InvoiceDataSourceQualifier
    public RestDataSource<Invoices> invoices() {
        return new RestDataSource<>(invoiceUri, restOperations, Invoices.class);
    }

    @Bean
    @ExpenseDataSourceQualifier
    public RestDataSource<Expenses> expenses() {
        return new RestDataSource<>(expenseUri, restOperations, Expenses.class);
    }

    @Bean
    public IncomeReportRepository incomeReportRepository() {
        return new IncomeReportRepository(invoices(), expenses(), new ReportingInboundModelMapper());
    }
}
