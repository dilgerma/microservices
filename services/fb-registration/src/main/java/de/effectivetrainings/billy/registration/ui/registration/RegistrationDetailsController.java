package de.effectivetrainings.billy.registration.ui.registration;

import de.effectivetrainings.billy.registration.domain.registrationdetails.RegistrationDetails;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
public class RegistrationDetailsController {


    @RequestMapping("/")
    public ModelAndView registrationDetails(@ModelAttribute("registrationDetails") RegistrationDetails
                                                    registrationDetails) {
        return new ModelAndView("registration-details", "registrationDetails", registrationDetails);
    }

    @RequestMapping(value = "/details", method = RequestMethod.POST)
    public String storeRegistrationDetails(
            @ModelAttribute("registrationDetails") RegistrationDetails
                    registrationDetails, BindingResult bindingResult) {
        //TODO persist registraton details
        log.debug("storing registration details : {}", registrationDetails);
        return "registration-details-success";
    }
}
