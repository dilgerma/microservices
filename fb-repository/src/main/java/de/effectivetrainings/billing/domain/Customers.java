package de.effectivetrainings.billing.domain;

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

    public Customers(List<Customer> customers) {
        this.customers = customers;
    }

}
