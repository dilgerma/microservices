package de.effectivetrainings.fastbill.rest;

/**
 *
 */
public class ServicesConfig {

    private String invoiceBackendUri;

    public ServicesConfig(String invoiceBackendUri) {
        this.invoiceBackendUri = invoiceBackendUri;
    }

    public String getInvoiceBackendUri() {
        return invoiceBackendUri;
    }
}
