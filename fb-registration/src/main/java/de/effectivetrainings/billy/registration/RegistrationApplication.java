package de.effectivetrainings.billy.registration;

import de.effectivetrainings.billy.registration.service.RegistrationService;
import de.effectivetrainings.billy.registration.service.RegistrationServiceImpl;
import de.effectivetrainings.billy.registration.ui.confirm.RegistrationConfirmController;
import de.effectivetrainings.billy.registration.ui.password.PasswordConfirmationController;
import de.effectivetrainings.billy.registration.ui.registration.RegistrationController;
import de.effectivetrainings.billy.registration.ui.registration.RegistrationDetailsController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@Controller
@PropertySource("messages.properties")
public class RegistrationApplication extends WebMvcConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(RegistrationApplication.class, args);
	}

	@Bean
    public static WorkaroundRestTemplateCustomizer workaroundRestTemplateCustomizer() {
        //workaround for https://github.com/spring-projects/spring-boot/issues/4553
        return new WorkaroundRestTemplateCustomizer();
    }

	@Bean
	public RegistrationService registrationService() {
		return new RegistrationServiceImpl();
	}

	@Bean
	public RegistrationController registrationController() {
		final RegistrationController registrationController = new RegistrationController(registrationService());
		return registrationController;
	}

	@Bean
	public RegistrationConfirmController registrationConfirmController() {
		return new RegistrationConfirmController(registrationService());
	}

	@Bean
	public RegistrationDetailsController registrationDetailsController() {
		return new RegistrationDetailsController();
	}

	@Bean
	public PasswordConfirmationController passwordConfirmationController() {
		return new PasswordConfirmationController(registrationService());
	}

}