package de.effectivetrainings.billy.billing.rest.inbound.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@ToString
@EqualsAndHashCode
public class FbInvoices {

    @Getter
    @JsonUnwrapped
    private List<FbInvoice> invoices;

    @JsonCreator
    public FbInvoices(@JsonProperty(value = "invoices") List<FbInvoice> invoices) {
        this.invoices = invoices;
    }
}
