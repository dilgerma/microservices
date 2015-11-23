package de.effectivetrainings.billy.billing;

import de.effectivetrainings.billy.billing.rest.InvoiceResource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@TestPropertySource({"classpath:application.properties"})
@WebAppConfiguration
public class StartupTest {

    @Autowired
    private InvoiceResource invoiceResource;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}
