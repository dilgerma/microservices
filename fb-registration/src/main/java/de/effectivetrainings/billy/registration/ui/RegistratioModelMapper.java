package de.effectivetrainings.billy.registration.ui;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.domain.Email;
import de.effectivetrainings.billy.registration.ui.mapper.Mapper;
import de.effectivetrainings.billy.registration.ui.registration.CustomerRegistrationDto;

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
