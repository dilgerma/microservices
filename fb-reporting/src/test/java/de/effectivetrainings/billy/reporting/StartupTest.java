package de.effectivetrainings.billy.reporting;

import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import de.effectivetrainings.support.rest.UserRestTemplate;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@TestPropertySource({"classpath:application.properties"})
@WebAppConfiguration
public class StartupTest {

    @Autowired
    @UserRestTemplate
    private RestTemplate restTemplate;

    @Autowired
    @SystemRequestTemplate
    RestTemplate systemRestTemplate;

    @Autowired
    private IncomeReportRepository incomeReportRepository;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}