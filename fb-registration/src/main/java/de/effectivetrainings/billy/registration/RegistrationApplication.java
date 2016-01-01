package de.effectivetrainings.billy.registration;

import de.effectivetrainings.billy.registration.ui.registration.RegistrationDetailsController;
import de.effectivetrainings.support.events.api.EventsExchangeQualifier;
import de.effectivetrainings.support.events.config.MessagingConnectionConfig;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

	@Configuration
	@Import(MessagingConnectionConfig.class)
	public static class EventsConfig {

		@Value("${events.queue.name}")
		private String eventsQueueName;

		@EventsExchangeQualifier
		@Autowired
		private FanoutExchange eventsExchange;

		@Bean
		public Queue registrationEventsQueue() {
			return new Queue(eventsQueueName, true, false, true);
		}

		@Bean
		public Binding eventsQueueBinding() {
			return BindingBuilder.bind(registrationEventsQueue()).to(eventsExchange);
		}
	}

}