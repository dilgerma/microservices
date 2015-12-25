package de.effectivetrainings.billy.registration.service;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.ui.password.PasswordConfirmation;
import de.effectivetrainings.billy.registration.domain.RegistrationConfirmationToken;

public interface RegistrationService {
    void register(CustomerRegistration customerRegistration);

    CustomerRegistration findRegistrationForToken(RegistrationConfirmationToken token);

    void confirmAccount(CustomerRegistration registration, PasswordConfirmation passwordConfirmation);
}
