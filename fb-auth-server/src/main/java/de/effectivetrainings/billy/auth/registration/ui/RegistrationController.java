package de.effectivetrainings.billy.auth.registration.ui;

import de.effectivetrainings.billy.auth.registration.RegistratioModelMapper;
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

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String submit(
            @Validated CustomerRegistrationDto customerRegistrationDto,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return "index";
        }
        try {
            registrationService.register(modelMapper.from(customerRegistrationDto));
        } catch (AlreadyRegisteredException alreadyRegistered) {
            bindingResult.reject("already.registered");
            return "index";
        }
        return "registration-success";
    }


}
