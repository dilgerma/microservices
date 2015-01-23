package de.effectivetrainings.fastbill.json;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import de.effectivetrainings.fastbill.json.Invoice;

import java.io.Serializable;
import java.util.List;

/**
 *
 */
public class Invoices implements Serializable {

    private List<Invoice> invoices;

    @JsonCreator
    public Invoices(@JsonProperty("invoices") List<Invoice> invoices) {
        this.invoices = invoices;
    }

    public List<Invoice> getInvoices() {
        return invoices;
    }
}
