package de.effectivetrainings.billy.auth.registration.service;

import de.effectivetrainings.billy.auth.registration.Mapper;
import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.domain.Email;
import de.effectivetrainings.billy.auth.registration.repository.Authority;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationDocument;

import java.util.Collections;

public class CustomerRegistationDocumentMapper implements Mapper<CustomerRegistration, CustomerRegistrationDocument> {

    @Override
    public CustomerRegistration from(CustomerRegistrationDocument customerRegistrationDocument) {
        final CustomerRegistration customerRegistration = new CustomerRegistration(customerRegistrationDocument.getName(),
                new Email(customerRegistrationDocument.getEmail()),
                customerRegistrationDocument.getPassword());
        return customerRegistration;
    }

    @Override
    public CustomerRegistrationDocument to(CustomerRegistration registration) {
        return new CustomerRegistrationDocument(registration.getName(), registration.getEmail().getEmail(), registration.getPassword(),registration.getRegistrationConfirmationToken().getToken(), registration.isConfirmed(), Collections.singletonList(Authority.USER));
    }
}
