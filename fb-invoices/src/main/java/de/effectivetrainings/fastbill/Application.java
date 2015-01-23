package de.effectivetrainings.fastbill;

import de.effectivetrainings.fastbill.config.RestConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
@EnableWebMvc
@Import(RestConfig.class)
public class Application
{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
