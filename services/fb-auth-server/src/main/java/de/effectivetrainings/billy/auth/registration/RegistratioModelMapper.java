package de.effectivetrainings.billy.auth.registration;


import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.domain.Email;
import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import de.effectivetrainings.billy.auth.registration.ui.CustomerRegistrationDto;

public class RegistratioModelMapper implements Mapper<CustomerRegistration, CustomerRegistrationDto> {


    @Override
    public CustomerRegistration from(CustomerRegistrationDto from) {
        return CustomerRegistration.builder().name(from.getName()).email(new Email(from.getEmail()))
                .registrationConfirmationToken(new RegistrationConfirmationToken()).build();
    }

    @Override
    public CustomerRegistrationDto to(CustomerRegistration to) {
        return new CustomerRegistrationDto(to.getName(), to.getEmail().getEmail());
    }
}
