package de.effectivetrainings.billy.reporting.web;

import de.effectivetrainings.billy.reporting.web.config.Profiles;
import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportingFacade;
import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportingMockFacade;
import de.effectivetrainings.billy.ui.Application;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource({"classpath:application.properties"})
@ActiveProfiles(Profiles.MOCK)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
public class MockStartupTest {



    @Autowired(required = false)
    private ReportingFacade reportingFacade;

    @Autowired
    private ReportingMockFacade mockFacade;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
        assertNull("reporting facade not wird in profile mock", reportingFacade);
        assertNotNull(mockFacade);
    }

}
