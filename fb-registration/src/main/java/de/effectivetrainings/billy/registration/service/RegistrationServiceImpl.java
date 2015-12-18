package de.effectivetrainings.billy.registration.service;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.domain.Email;
import de.effectivetrainings.billy.registration.ui.password.PasswordConfirmation;
import de.effectivetrainings.billy.registration.domain.RegistrationConfirmationToken;
import de.effectivetrainings.billy.registration.service.exception.AlreadyRegisteredException;
import de.effectivetrainings.billy.registration.service.exception.InvalidRegistrationTokenException;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

@Slf4j
public class RegistrationServiceImpl implements RegistrationService {

    private Map<Email, CustomerRegistration> registrations = new HashMap<>();
    private Map<RegistrationConfirmationToken, CustomerRegistration> tokens = new HashMap<>();

    @Override
    public void register(CustomerRegistration customerRegistration) {
        if (alreadyRegistered(customerRegistration)) {
            throw new AlreadyRegisteredException(customerRegistration);
        }
        log.info("Registering email {} for Token : {}", customerRegistration.getEmail(), customerRegistration.getRegistrationConfirmationToken());
        registrations.put(customerRegistration.getEmail(), customerRegistration);
        tokens.put(customerRegistration.getRegistrationConfirmationToken(), customerRegistration);
        //TODO send customer registration event...
    }

    @Override
    public CustomerRegistration findRegistrationForToken(RegistrationConfirmationToken token) {
        final CustomerRegistration customerRegistration = tokens.get(token);
        if (customerRegistration == null) {
            throw new InvalidRegistrationTokenException(token);
        }
        if (customerRegistration.isConfirmed()) {
            throw new AlreadyRegisteredException(customerRegistration);
        }

        return customerRegistration;
        //TODO send customer confirmed event
    }

    @Override
    public void confirmPasswords(
            CustomerRegistration registration, PasswordConfirmation passwordConfirmation) {
        registration.confirm(passwordConfirmation.getPassword());
        //TODO store confirmed registration

    }

    private boolean alreadyRegistered(CustomerRegistration customerRegistration) {
        return registrations.containsKey(customerRegistration.getEmail());
    }
}
