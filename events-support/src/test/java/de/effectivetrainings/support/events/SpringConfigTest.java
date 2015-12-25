package de.effectivetrainings.support.events;

import de.effectivetrainings.support.events.config.MessagingConnectionConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {SpringConfigTest.TestConfiguration.class, MessagingConnectionConfig.class})
@TestPropertySource(properties = {
        "events.queue=eventsQ",
        "events.exchangeName=exchangeName",
        "spring.rabbitmq.host=host",
        "spring.rabbitmq.port=4711",
        "spring.rabbitmq.user=user",
        "spring.rabbitmq.port=port"})
public class SpringConfigTest {

    @Test
    public void configTest() {
        //nothing to test
    }

    @Configuration
    @EnableAutoConfiguration
    public static class TestConfiguration {
    }

}
