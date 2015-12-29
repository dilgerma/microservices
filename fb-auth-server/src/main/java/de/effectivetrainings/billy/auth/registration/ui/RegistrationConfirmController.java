package de.effectivetrainings.billy.auth.registration.ui;

import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.domain.RegistrationConfirmationToken;
import de.effectivetrainings.billy.auth.registration.password.PasswordConfirmation;
import de.effectivetrainings.billy.auth.registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegistrationConfirmController {

    private RegistrationService registrationService;

    @Autowired
    public RegistrationConfirmController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @RequestMapping("/register/confirm/{token}")
    public String confirm(@PathVariable("token") String token,  ModelMap modelMap) {
        final CustomerRegistration customerRegistration = registrationService.findRegistrationForToken(new RegistrationConfirmationToken(
                token));
        modelMap.put("registration", customerRegistration);
        modelMap.put("passwords", new PasswordConfirmation());
        return "registration-password";
    }
}
