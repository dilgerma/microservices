package de.effectivetrainings.billy.registration.service.exception;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import lombok.Getter;

@Getter
public class AlreadyRegisteredException extends RuntimeException implements RegistrationException {

    private CustomerRegistration customerRegistration;

    public AlreadyRegisteredException(CustomerRegistration customerRegistration) {
        this.customerRegistration = customerRegistration;
    }
}
