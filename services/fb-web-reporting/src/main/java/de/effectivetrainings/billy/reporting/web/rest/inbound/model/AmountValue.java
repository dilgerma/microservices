package de.effectivetrainings.billy.reporting.web.rest.inbound.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AmountValue {

    @JsonProperty(value = "vat", required = true)
    private final Double vatTotal;

    @JsonProperty(value = "net", required = true)
    private final Double subTotal;

    @JsonProperty(value = "total", required = true)
    private final Double total;

    public AmountValue(Double vatTotal, Double subTotal, Double total) {
        this.vatTotal = vatTotal;
        this.subTotal = subTotal;
        this.total = total;
    }
}
