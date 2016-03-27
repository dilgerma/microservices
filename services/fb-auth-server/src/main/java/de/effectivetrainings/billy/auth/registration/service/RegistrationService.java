package de.effectivetrainings.billy.auth.registration.service;


import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import de.effectivetrainings.billy.auth.registration.password.PasswordConfirmation;

public interface RegistrationService {
    CustomerRegistration register(CustomerRegistration customerRegistration);

    CustomerRegistration findRegistrationForToken(RegistrationConfirmationToken token);

    void confirmAccount(CustomerRegistration registration, PasswordConfirmation passwordConfirmation);
}
