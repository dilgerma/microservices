package de.effectivetrainings.billy.auth.registration.password;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class PasswordConfirmation {

    private String password;
    private String passwordConfirm;

    public PasswordConfirmation(String password, String passwordConfirm) {
        this.password = password;
        this.passwordConfirm = passwordConfirm;
    }

    public boolean canConfirm() {
        return password != null && passwordConfirm != null && password.equals(passwordConfirm);
    }
}
