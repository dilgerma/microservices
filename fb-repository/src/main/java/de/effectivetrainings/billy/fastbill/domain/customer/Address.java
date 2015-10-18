package de.effectivetrainings.billy.fastbill.domain.customer;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NonNull;

/**
 *
 */
@Data
public class Address {

    @NonNull
    @JsonProperty(value = "ADDRESS")
    private String street;
    @JsonProperty(value = "ADDRESS_2")
    private String streetAddition;
    @NonNull
    @JsonProperty(value = "ZIPCODE")
    private String zip;
    @JsonProperty(value = "CITY")
    @NonNull
    private String city;

}
