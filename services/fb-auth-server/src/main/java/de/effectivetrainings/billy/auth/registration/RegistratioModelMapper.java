package de.effectivetrainings.billy.auth.registration;


import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.domain.Email;
import de.effectivetrainings.billy.auth.registration.ui.CustomerRegistrationDto;

public class RegistratioModelMapper implements Mapper<CustomerRegistration, CustomerRegistrationDto> {


    @Override
    public CustomerRegistration from(CustomerRegistrationDto from) {
        return new CustomerRegistration(from.getName(), new Email(from.getEmail()));
    }

    @Override
    public CustomerRegistrationDto to(CustomerRegistration to) {
        return new CustomerRegistrationDto(to.getName(), to.getEmail().getEmail());
    }
}
