package de.effectivetrainings.billy.fastbill;

import de.effectivetrainings.billy.fastbill.config.Profiles;
import de.effectivetrainings.billy.fastbill.rest.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@ActiveProfiles(Profiles.MOCK)
@TestPropertySource({"classpath:application.properties", "classpath:test.properties"})
public class StartupTest {

    @Autowired
    private ExpenseResource expenseResource;

    @Autowired
    private InvoiceResource invoiceResource;

    @Autowired
    private ProjectResource projectResource;

    @Autowired
    private ReportResource reportResource;

    @Autowired
    private CustomerResource customerResource;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}
