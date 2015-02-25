package de.effectivetrainings.fastbill.invoices;

import de.effectivetrainings.fastbill.Application;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@TestPropertySource(value = "classpath:test.properties")
@WebAppConfiguration
public class StartupTest {

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}
