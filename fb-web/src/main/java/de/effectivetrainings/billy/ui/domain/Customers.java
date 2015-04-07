package de.effectivetrainings.billy.ui.domain;

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
    public Customers(@JsonProperty(value = "customers") List<Customer> customers) {
        this.customers = customers;
    }

}
