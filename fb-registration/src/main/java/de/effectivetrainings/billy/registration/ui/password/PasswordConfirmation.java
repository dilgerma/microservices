package de.effectivetrainings.billy.registration.ui.password;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;

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
        return password != null && passwordConfirm != null && StringUtils.equals(password, passwordConfirm);
    }
}
