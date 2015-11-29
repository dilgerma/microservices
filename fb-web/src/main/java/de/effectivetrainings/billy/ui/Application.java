package de.effectivetrainings.billy.ui;

import de.effectivetrainings.billy.ui.config.ApplicationConfig;
import de.effectivetrainings.billy.ui.config.MessaginConnectionConfig;
import de.effectivetrainings.billy.ui.config.OAuth2Config;
import de.effectivetrainings.spring.influx.EnableInflux;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.boot.autoconfigure.transaction.TransactionAutoConfiguration;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

/**
 *
 */
@Configuration
@EnableAutoConfiguration(exclude = TransactionAutoConfiguration.class)
@ComponentScan("de.effectivetrainings.billy.ui.rest")
@EnableEurekaClient
@EnableInflux
@EnableCircuitBreaker
@EnableHystrixDashboard
@EnableOAuth2Sso
@EnableZuulProxy
@Import({ApplicationConfig.class, MessaginConnectionConfig.class, OAuth2Config.class})
public class Application
{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }


}
