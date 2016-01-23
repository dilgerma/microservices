package de.effectivetrainings.billy.reporting.rest.outbound;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReportItemValue {

    @JsonProperty(value = "number")
    private final String invoiceNumber;

    @JsonProperty(value = "amount")
    private final AmountValue amountValue;

    @JsonProperty(value = "organization")
    private final String organization;

    public ReportItemValue(String number, AmountValue amountValue, String organization) {
        this.invoiceNumber = number;
        this.amountValue = amountValue;
        this.organization = organization;
    }
}
