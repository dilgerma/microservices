package de.effectivetrainings;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Value;

@Value
public class Address {

    private String street;
    private String houseNumber;
    private String zip;
    private String city;

    @JsonCreator
    public Address(@JsonProperty("street") String street, @JsonProperty("houseNumber") String houseNumber,
                   @JsonProperty("zip") String zip,
                   @JsonProperty("city") String city) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.zip = zip;
        this.city = city;
    }

}