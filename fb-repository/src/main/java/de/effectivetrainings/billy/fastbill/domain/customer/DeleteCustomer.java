package de.effectivetrainings.billy.fastbill.domain.customer;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NonNull;

/**
 *
 */
@Data
public class DeleteCustomer {

    @NonNull
    @JsonProperty(value = "CUSTOMER_ID")
    private String customerId;
}
