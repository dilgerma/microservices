package de.effectivetrainings.billy.auth.registration.ui;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@ToString
public class CustomerRegistrationDto {

    @NotNull
    private String name;
    @Email
    @NotNull
    private String email;

    public CustomerRegistrationDto() {
    }

    public CustomerRegistrationDto(String name, String email) {
        this.name = name;
        this.email = email;
    }


}
