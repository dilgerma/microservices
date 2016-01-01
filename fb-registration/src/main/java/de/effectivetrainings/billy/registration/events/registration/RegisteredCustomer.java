package de.effectivetrainings.billy.registration.events.registration;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisteredCustomer {

    private final String email;
    private final String name;

    @JsonCreator
    public RegisteredCustomer(@JsonProperty("email") String email, @JsonProperty("name") String name) {
        this.email = email;
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }
}
