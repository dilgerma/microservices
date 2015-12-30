package de.effectivetrainings.billy.auth.registration.events;

import java.util.Objects;

public class RegisteredCustomer {

    private final String email;
    private final String name;

    public RegisteredCustomer(String email, String name) {
        this.email = Objects.requireNonNull(email);
        this.name = Objects.requireNonNull(name);
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }
}
