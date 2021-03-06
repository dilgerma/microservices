package de.effectivetrainings.billy.auth.registration.service.exception;

import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@RequiredArgsConstructor
public class AlreadyConfirmedException extends RuntimeException implements RegistrationException {

    @NotNull
    private RegistrationConfirmationToken token;
    @NotNull
    private CustomerRegistration registration;

}
