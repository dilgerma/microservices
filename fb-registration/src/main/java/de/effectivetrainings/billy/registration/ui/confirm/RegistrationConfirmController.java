package de.effectivetrainings.billy.registration.ui.confirm;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.domain.RegistrationConfirmationToken;
import de.effectivetrainings.billy.registration.service.RegistrationService;
import de.effectivetrainings.billy.registration.ui.password.PasswordConfirmation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegistrationConfirmController {

    private RegistrationService registrationService;

    public RegistrationConfirmController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @RequestMapping("/register/confirm/{token}")
    public String confirm(@PathVariable("token") RegistrationConfirmationToken token,  ModelMap modelMap) {
        final CustomerRegistration customerRegistration = registrationService.confirmRegistration(token);
        modelMap.put("registration", customerRegistration);
        modelMap.put("passwords", new PasswordConfirmation());
        return "registration-password";
    }
}
