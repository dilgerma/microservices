package de.effectivetrainings.billy.fastbill.domain.customer;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Data;
import lombok.NonNull;

/**
 *
 */
@Data
public class NewCustomer {

    //this is not the customer id but some custom customer number
    @JsonProperty(value = "CUSTOMER_NUMBER")
    private String customerNumber;
    @NonNull
    @JsonProperty(value = "CUSTOMER_TYPE")
    private CustomerType customerType;
    @NonNull
    @JsonProperty(value = "ORGANIZATION")
    private String organization;
    @JsonProperty(value = "PHONE")
    private String phone;
    @JsonProperty(value = "MOBILE")
    private String mobile;
    @JsonProperty(value = "EMAIL")
    private String email;
    @JsonProperty(value = "VAT_ID")
    private String vatId;
    @JsonUnwrapped
    private Address address;
}
