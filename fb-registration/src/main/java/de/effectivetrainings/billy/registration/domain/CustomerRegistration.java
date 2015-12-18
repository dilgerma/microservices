package de.effectivetrainings.billy.registration.domain;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class CustomerRegistration {

    private String name;
    private Email email;
    private String password;
    private RegistrationConfirmationToken registrationConfirmationToken;
    private boolean confirmed;

    public CustomerRegistration(String name, Email email) {
        this.name = name;
        this.email = email;
        this.registrationConfirmationToken = new RegistrationConfirmationToken();
    }


    public CustomerRegistration(String name, Email email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.registrationConfirmationToken = new RegistrationConfirmationToken();
    }

    public CustomerRegistration confirm(String password) {
        this.confirmed = true;
        this.password = password;
        return this;
    }

}
