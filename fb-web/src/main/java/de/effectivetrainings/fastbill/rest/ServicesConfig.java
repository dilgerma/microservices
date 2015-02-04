package de.effectivetrainings.fastbill.rest;

import lombok.extern.slf4j.Slf4j;

/**
 *
 */
@Slf4j
public class ServicesConfig {

    private String invoiceBackendUri;

    public ServicesConfig(String invoiceBackendUri) {
        log.info("Configuration: Invoice-Service-URI {}", invoiceBackendUri);
        this.invoiceBackendUri = invoiceBackendUri;
    }

    public String getInvoiceBackendUri() {
        return invoiceBackendUri;
    }
}
