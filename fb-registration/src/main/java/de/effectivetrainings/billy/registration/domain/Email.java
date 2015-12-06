package de.effectivetrainings.billy.registration.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@EqualsAndHashCode
@ToString
public class Email {

    private String email;

    public Email(String email) {
        this.email = email;
    }
}
