package de.effectivetrainings.billy.reporting.rest.inbound.invoice;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

@Getter
public class Invoices {

    private List<Invoice> invoices;

    @JsonCreator
    public Invoices(@JsonProperty("invoices") List<Invoice> invoices) {
        this.invoices = invoices;
    }

}
