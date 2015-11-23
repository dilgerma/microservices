package de.effectivetrainings.billy.expenses;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestOperations;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@TestPropertySource(value = "classpath:application.properties")
@WebAppConfiguration
public class StartupTest {

    @Autowired
    @Qualifier("userRestTemplate")
    private RestOperations restTemplate;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }


}
