package de.effectivetrainings.billing.config;

import lombok.extern.slf4j.Slf4j;

/**
 *
 */
@Slf4j
public class ServicesConfig {

    private String invoiceBackendUri;
    private String expenseBackendURI;

    public ServicesConfig(String invoiceBackendUri, String expenseBackendURI) {
        log.info("Configuration: Invoice-Service-URI {}", invoiceBackendUri);
        log.info("Configuration: Expense-Service-URI {}", expenseBackendURI);
        this.invoiceBackendUri = invoiceBackendUri;
        this.expenseBackendURI = expenseBackendURI;
    }

    public String getInvoiceBackendUri() {
        return invoiceBackendUri;
    }

    public String getExpenseBackendURI() {
        return expenseBackendURI;
    }
}
