package de.effectivetrainings.billy.customermanagement.rest.api.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

/**
 *
 */
@Getter
public class Customers {

    @JsonProperty(value = "customers")
    private List<Customer> customers;

  @JsonCreator
    public Customers(@JsonProperty("customers") List<Customer> customers) {
        this.customers = customers;
    }

}
