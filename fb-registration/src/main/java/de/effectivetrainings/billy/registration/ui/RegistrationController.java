package de.effectivetrainings.billy.registration.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class RegistrationController {

    @RequestMapping("/")
    public ModelAndView modelAndView() {
        return new ModelAndView("index");
    }
}
