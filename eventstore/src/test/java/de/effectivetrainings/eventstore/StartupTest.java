package de.effectivetrainings.eventstore;

import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.assertNotNull;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource("classpath:application.properties")
@Ignore
public class StartupTest {

    @Autowired
    private AmqpTemplate amqpTemplate;

    @Test
    public void contextTest() {
        assertNotNull(amqpTemplate);
    }

}
