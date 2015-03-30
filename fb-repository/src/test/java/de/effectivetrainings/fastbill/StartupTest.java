package de.effectivetrainings.fastbill;

import de.effectivetrainings.fastbill.config.Profiles;
import org.junit.Test;
import org.junit.runner.RunWith;
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

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}
