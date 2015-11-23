package de.effectivetrainings.billy.ui;

import de.effectivetrainings.billy.ui.rest.FbFacade;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.correlation.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.nag.SlowDownRestInterceptor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestOperations;
import org.springframework.web.client.RestTemplate;

import java.util.Set;
import java.util.stream.Collectors;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource({"classpath:application.properties","classpath:test.properties"})
public class StartupTest {

    @Autowired
    @Qualifier("userRestTemplate")
    private RestOperations restTemplate;

    @Autowired
    private FbFacade fbFacade;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }
}
