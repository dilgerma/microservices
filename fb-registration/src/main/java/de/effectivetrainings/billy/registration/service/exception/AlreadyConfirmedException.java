package de.effectivetrainings.billy.registration.service.exception;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.domain.RegistrationConfirmationToken;
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
