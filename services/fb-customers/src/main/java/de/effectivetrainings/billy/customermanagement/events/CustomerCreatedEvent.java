package de.effectivetrainings.billy.customermanagement.events;

import de.effectivetrainings.billy.customermanagement.repository.domain.Customer;

/**
 *
 */
public class CustomerCreatedEvent implements Event<Customer> {

    private Customer customer;

    public CustomerCreatedEvent(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String getAggregateId() {
        return customer.getCustomerId();
    }

    @Override
    public String getAggregateName() {
        return "customers";
    }

    @Override
    public Customer getPayload() {
        return customer;
    }
}
