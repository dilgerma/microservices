package de.effectivetrainings.billy.auth.registration.domain;

import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Builder
public class CustomerRegistration {

    private String name;
    private Email email;
    private String password;
    private RegistrationConfirmationToken registrationConfirmationToken = new RegistrationConfirmationToken();
    private boolean confirmed;

    public CustomerRegistration confirm(String password) {
        this.confirmed = true;
        this.password = password;
        return this;
    }

}
