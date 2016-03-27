package de.effectivetrainings.billy.auth.registration.ui;

import de.effectivetrainings.billy.auth.registration.RegistratioModelMapper;
import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.service.RegistrationService;
import de.effectivetrainings.billy.auth.registration.service.exception.AlreadyRegisteredException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class RegistrationController {


    private RegistrationService registrationService;
    private RegistratioModelMapper modelMapper = new RegistratioModelMapper();

    @Autowired
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @RequestMapping("/")
    public ModelAndView modelAndView() {
        return new ModelAndView("index", "registration", new CustomerRegistrationDto());
    }

    @RequestMapping("/login")
    public String loginView() {
        return "login";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ModelAndView submit(
            @Validated CustomerRegistrationDto customerRegistrationDto,
            BindingResult bindingResult
    ) {

        if (bindingResult.hasErrors()) {
            return new ModelAndView("index");
        }
        try {
            final CustomerRegistration register = registrationService
                    .register(modelMapper.from(customerRegistrationDto));
            return new ModelAndView("registration-success", "token",
                    register.getRegistrationConfirmationToken().getToken());
        } catch (AlreadyRegisteredException alreadyRegistered) {
            bindingResult.reject("already.registered");
            return new ModelAndView("index");
        }
    }


}
