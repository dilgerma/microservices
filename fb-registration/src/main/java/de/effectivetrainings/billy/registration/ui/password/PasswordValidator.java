package de.effectivetrainings.billy.registration.ui.password;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class PasswordValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return PasswordConfirmation.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "password", "required.password");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "passwordConfirm", "required.passwordConfirm");

        PasswordConfirmation passwordConfirmation = (PasswordConfirmation) target;
        if (!passwordConfirmation.canConfirm()) {
            errors.rejectValue("password", "password.confirm.mismatch");
        }

    }
}
