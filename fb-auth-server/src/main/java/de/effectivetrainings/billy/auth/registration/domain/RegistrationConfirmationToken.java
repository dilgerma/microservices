package de.effectivetrainings.billy.auth.registration.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

import java.util.UUID;

@Getter
@EqualsAndHashCode
@ToString
public class RegistrationConfirmationToken {

    private String token;

    public RegistrationConfirmationToken() {
        this.token = UUID.randomUUID().toString();
    }

    public RegistrationConfirmationToken(String token) {
        this.token = token;
    }
}
