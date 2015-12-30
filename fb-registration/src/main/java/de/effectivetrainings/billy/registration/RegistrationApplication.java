package de.effectivetrainings.billy.registration;

import de.effectivetrainings.billy.registration.ui.registration.RegistrationDetailsController;
import de.effectivetrainings.support.events.config.MessagingConnectionConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableAutoConfiguration
@ComponentScan
@Controller
@PropertySource("messages.properties")
@Import(MessagingConnectionConfig.class)
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
	public RegistrationDetailsController registrationDetailsController() {
		return new RegistrationDetailsController();
	}

}