package de.effectivetrainings.billy.auth.registration.service;

import de.effectivetrainings.billy.auth.registration.Mapper;
import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.domain.Email;
import de.effectivetrainings.billy.auth.registration.repository.Authority;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationData;
import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;

import java.util.Collections;

public class CustomerRegistationDocumentMapper implements Mapper<de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration, CustomerRegistrationData> {

    @Override
    public de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration from(CustomerRegistrationData customerRegistrationDataDocument) {
        final de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration customerRegistration =
                CustomerRegistration.builder()
                        .confirmed(customerRegistrationDataDocument.isConfirmed())
                        .registrationConfirmationToken(
                                new RegistrationConfirmationToken(customerRegistrationDataDocument.getToken()))
                        .email(new Email(customerRegistrationDataDocument.getEmail()))
                        .name(customerRegistrationDataDocument.getName())
                        .password(customerRegistrationDataDocument.getPassword()).build();
        return customerRegistration;
    }

    @Override
    public CustomerRegistrationData to(
            de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration registration) {
        return new CustomerRegistrationData(registration.getName(), registration.getEmail().getEmail(), registration.getPassword(),registration.getRegistrationConfirmationToken().getToken(), registration.isConfirmed(), Collections.singletonList(Authority.USER));
    }
}
