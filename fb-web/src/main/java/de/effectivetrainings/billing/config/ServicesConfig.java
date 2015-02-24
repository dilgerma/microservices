package de.effectivetrainings.billing.config;

import lombok.extern.slf4j.Slf4j;

/**
 *
 */
@Slf4j
public class ServicesConfig {

    private String invoiceBackendUri;
    private String expenseBackendURI;
    private String customersBackendURI;

    public ServicesConfig(String invoiceBackendUri, String expenseBackendURI, String customersBackendURI) {
        log.info("Configuration: Invoice-Service-URI {}", invoiceBackendUri);
        log.info("Configuration: Expense-Service-URI {}", expenseBackendURI);
        log.info("Configuration: Customers-Service-URI {}", customersBackendURI);
        this.invoiceBackendUri = invoiceBackendUri;
        this.expenseBackendURI = expenseBackendURI;
        this.customersBackendURI = customersBackendURI;
    }

    public String getInvoiceBackendUri() {
        return invoiceBackendUri;
    }

    public String getCustomersBackendURI() {
        return customersBackendURI;
    }

    public String getExpenseBackendURI() {
        return expenseBackendURI;
    }
}
