package de.effectivetrainings.billy.customermanagement.repository.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 *
 */
@Getter
@NoArgsConstructor
@EqualsAndHashCode
public class Customer {

    public static final String AGGREGATE_NAME = "customer.customers";

    //TODO events - implement mongo sequence

    private String customerId;
    private String customerNumber;
    private String organization;

    public Customer(String customerId, String customerNumber, String organization) {
        this.customerId = customerId;
        this.customerNumber = customerNumber;
        this.organization = organization;
    }


}
