package de.effectivetrainings.billy.ui.config;

import lombok.extern.slf4j.Slf4j;

/**
 *
 */
@Slf4j
public class ServicesConfig {

    private String invoiceBackendUri;
    private String expenseBackendURI;
    private String customersBackendURI;
    private String templateServiceURI;

    public ServicesConfig(String invoiceBackendUri, String expenseBackendURI, String customersBackendURI, String templateServiceURI) {
        log.info("Configuration: Invoice-Service-URI {}", invoiceBackendUri);
        log.info("Configuration: Expense-Service-URI {}", expenseBackendURI);
        log.info("Configuration: Customers-Service-URI {}", customersBackendURI);
        log.info("Configuration: Template-Service-URI {}", templateServiceURI);
        this.invoiceBackendUri = invoiceBackendUri;
        this.expenseBackendURI = expenseBackendURI;
        this.customersBackendURI = customersBackendURI;
        this.templateServiceURI = templateServiceURI;
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

    public String getTemplateServiceURI() {
        return templateServiceURI;
    }
}
