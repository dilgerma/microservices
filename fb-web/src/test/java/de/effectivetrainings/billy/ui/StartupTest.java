package de.effectivetrainings.billy.ui;

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
@WebAppConfiguration
@TestPropertySource({"classpath:application.properties","classpath:test.properties"})
public class StartupTest {

    @Autowired
    @Qualifier("oAuth2RestOperations")
    private RestOperations restTemplate;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}
