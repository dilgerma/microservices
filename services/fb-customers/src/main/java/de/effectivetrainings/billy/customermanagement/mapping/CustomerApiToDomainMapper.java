package de.effectivetrainings.billy.customermanagement.mapping;

import de.effectivetrainings.billy.customermanagement.repository.domain.Customer;

/**
 *
 */
public class CustomerApiToDomainMapper {

    public Customer toDomain(de.effectivetrainings.billy.customermanagement.rest.api.domain.Customer customer) {
        return new Customer(customer.getCustomerId(), customer.getCustomerNumber(), customer.getOrganization());
    }
}
