package de.effectivetrainings.billy.registration.ui.password;

import de.effectivetrainings.billy.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.registration.service.RegistrationService;
import de.effectivetrainings.billy.registration.ui.RegistratioModelMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Slf4j
@Controller
public class PasswordConfirmationController {


    private RegistrationService registrationService;
    private RegistratioModelMapper modelMapper = new RegistratioModelMapper();

    public PasswordConfirmationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @InitBinder
    public void init(WebDataBinder binder) {
        binder.addValidators(new PasswordValidator());
    }

    @RequestMapping(value = "/register/password", method = RequestMethod.GET)
    public ModelAndView modelAndView() {
        return new ModelAndView("registration-password", "passwords", new PasswordConfirmation());
    }

    @RequestMapping(value = "/register/password", method = RequestMethod.POST)
    public String passwordConfirm(
            @ModelAttribute("passwords") @Valid PasswordConfirmation passwords, BindingResult result, ModelMap
            modelMap) {
        if (result.hasErrors()) {
            return "registration-password";
        }
        final CustomerRegistration registration = (CustomerRegistration) modelMap.get("registration");
        registrationService.confirmPasswords(registration, passwords);
        return "registration-complete";
    }

}
