package de.effectivetrainings.billy.auth.registration.service;


import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.domain.RegistrationConfirmationToken;
import de.effectivetrainings.billy.auth.registration.password.PasswordConfirmation;

public interface RegistrationService {
    void register(CustomerRegistration customerRegistration);

    CustomerRegistration findRegistrationForToken(RegistrationConfirmationToken token);

    void confirmAccount(CustomerRegistration registration, PasswordConfirmation passwordConfirmation);
}
