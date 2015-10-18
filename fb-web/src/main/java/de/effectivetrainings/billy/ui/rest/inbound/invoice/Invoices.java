package de.effectivetrainings.billy.ui.rest.inbound.invoice;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import java.util.List;

/**
 *
 */
public class Invoices {

    @JsonUnwrapped
    private List<Invoice> invoices;

    @JsonCreator
    public Invoices(@JsonProperty("invoices") List<Invoice> invoices) {
        this.invoices = invoices;
    }

    public List<Invoice> getInvoices() {
        return invoices;
    }
}
