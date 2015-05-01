package de.effectivetrainings.billy.customermanagement;

import de.effectivetrainings.billy.customermanagement.config.MessagingTemplate;
import de.effectivetrainings.billy.customermanagement.rest.api.domain.Customer;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@TestPropertySource({"classpath:application.properties", "classpath:test.properties"})
@WebAppConfiguration
@Ignore
public class MessagingTest {

    @Autowired
    @MessagingTemplate
    private AmqpTemplate amqpTemplate;

    @Autowired
    @Qualifier("commands.customer")
    private Queue queue;

    @Autowired
    private AmqpAdmin admin;

    @Test
    public void createCustomer() throws InterruptedException {
        final Customer message = new Customer();
        message.setCustomerNumber("4711");
        amqpTemplate.convertAndSend("exchange.handler.customer", "customer.commands", message);

        while(true) {
            Thread.currentThread().sleep(2000);
        }

    }

}
