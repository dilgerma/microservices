package de.effectivetrainings.billy.billing.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

/**
 *
 */
@Getter
public class Invoices {

    @JsonUnwrapped
    private List<Invoice> invoices;

    @JsonCreator
    public Invoices(@JsonProperty("invoices") List<Invoice> invoices) {
        this.invoices = invoices != null ? invoices : new ArrayList<>();
    }

}
