package de.effectivetrainings.billy.reporting.rest;

import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.ReportExpense;
import de.effectivetrainings.billy.reporting.domain.ReportInvoice;
import de.effectivetrainings.billy.reporting.rest.inbound.ReportingInboundModelMapper;
import de.effectivetrainings.billy.reporting.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.reporting.rest.inbound.invoice.Invoices;
import de.effectivetrainings.support.rest.UserRestTemplate;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 *
 */
@RestController
@RequestMapping("/report")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class ReportingResource {

    private RestTemplate restTemplate;

    private String invoiceUri;
    private String expenseUri;

    private ReportingInboundModelMapper inboundModelMapper;

    @Autowired
    public ReportingResource(@Value("${fb.invoices.uri}") String invoiceUri, @Value("${fb.expenses.uri}") String expenseUri, @UserRestTemplate RestTemplate restTemplate, ReportingInboundModelMapper inboundModelMapper) {
        this.restTemplate = restTemplate;
        this.invoiceUri = invoiceUri;
        this.expenseUri = expenseUri;
        this.inboundModelMapper = inboundModelMapper;
    }

    @RequestMapping
    public Report reports() {

        log.info("Requesting report");
        List<ReportInvoice> reportInvoices = reportInvoices();
        List<ReportExpense> reportExpenses = reportExpenses();
        return new Report(reportInvoices, reportExpenses);
    }

    private List<ReportInvoice> reportInvoices() {
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());
        log.debug("requesting invoices for report with URI: {}", invoiceUri);
        ResponseEntity<Invoices> invoices = restTemplate.exchange(invoiceUri, HttpMethod.GET, requestEntity, Invoices.class);
        log.debug("loading invoices: {}", invoices);
        return inboundModelMapper.toInvoices(invoices.getBody().getInvoices());
    }

    private List<ReportExpense> reportExpenses() {
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());
        log.debug("requesting expenses for report with URI: {}", invoiceUri);
        ResponseEntity<Expenses> invoices = restTemplate.exchange(expenseUri, HttpMethod.GET, requestEntity, Expenses.class);
        log.debug("loading expenses: {}", invoices);
        return inboundModelMapper.toExpenses(invoices.getBody().getExpenses());
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected void handle(Exception e) {
        log.error("Resource ERROR", e);
    }
}
