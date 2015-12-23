package de.effectivetrainings.billy.registration.ui.password;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.domain.RegistrationConfirmationToken;
import de.effectivetrainings.billy.registration.service.RegistrationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Slf4j
@Controller
public class PasswordConfirmationController {


    private RegistrationService registrationService;

    public PasswordConfirmationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @InitBinder
    public void init(WebDataBinder binder) {
        binder.addValidators(new PasswordValidator());
    }

    @RequestMapping(value = "/register/{token}/password", method = RequestMethod.GET)
    public ModelAndView modelAndView(@PathVariable("token") String token) {
        final ModelAndView model = new ModelAndView("registration-password",
                "passwords",
                new PasswordConfirmation());
        model.addObject("token", token);
        return model;
    }

    @RequestMapping(value = "/register/{token}/password", method = RequestMethod.POST)
    public String passwordConfirm(
            @PathVariable("token") String token,
            @ModelAttribute("passwords") @Valid PasswordConfirmation passwords, BindingResult result) {
        if (result.hasErrors()) {
            return "registration-password";
        }
        final CustomerRegistration registrationForToken = registrationService.findRegistrationForToken(new RegistrationConfirmationToken(
                token));
        registrationService.confirmPasswords(registrationForToken, passwords);
        return "registration-complete";
    }

}
