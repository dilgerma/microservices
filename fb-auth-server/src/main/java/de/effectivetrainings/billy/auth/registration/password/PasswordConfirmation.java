package de.effectivetrainings.billy.auth.registration.password;

import lombok.Data;

@Data
public class PasswordConfirmation {

    private String password;
    private String passwordConfirm;

    public PasswordConfirmation(String password, String passwordConfirm) {
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

    public PasswordConfirmation() {
    }

    public boolean canConfirm() {
        return password != null && passwordConfirm != null && password.equals(passwordConfirm);
    }
}
