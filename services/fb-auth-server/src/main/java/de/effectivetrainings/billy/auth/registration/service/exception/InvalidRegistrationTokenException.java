package de.effectivetrainings.billy.auth.registration.service.exception;

import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import lombok.Getter;

@Getter
public class InvalidRegistrationTokenException extends RuntimeException implements RegistrationException {

    private final RegistrationConfirmationToken registrationConfirmationToken;

    public InvalidRegistrationTokenException(RegistrationConfirmationToken registrationConfirmationToken) {
        this.registrationConfirmationToken = registrationConfirmationToken;
    }
}
