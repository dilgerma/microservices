package de.effectivetrainings.billy.reporting.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Date;

/**
 *
 */
@Getter
@AllArgsConstructor
public class ReportInvoice {

    @JsonProperty(value = "invoiceNumber")
    private String invoiceNumber;

    @JsonProperty(value = "amount")
    private Amount amountValue;

    @JsonProperty(value = "organization")
    private String organization;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @JsonProperty(value = "paidDate")
    private Date paidDate;
}
