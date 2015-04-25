package de.effectivetrainings.billy.fastbill.domain.customer;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 *
 */
public class CustomerContactPerson {

    @JsonProperty(value = "SALUTATION")
    private Salutation saluation;
    @JsonProperty(value = "FIRST_NAME")
    private String firstName;
    @JsonProperty(value = "LAST_NAME")
    private String lastName;
}
