package de.effectivetrainings.billy.reporting.web;

import de.effectivetrainings.billy.reporting.web.rest.inbound.ReportingFacade;
import de.effectivetrainings.billy.ui.Application;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.correlation.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.nag.SlowDownRestInterceptor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
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
@TestPropertySource({"classpath:application.properties"})
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
public class StartupTest {

    @Autowired
    @UserRestTemplate
    private RestTemplate restTemplate;

    @Autowired
    @SystemRequestTemplate
    RestTemplate systemRestTemplate;

    @Autowired
    private ReportingFacade reportingFacade;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }

    @Test
    public void verifyInterceptors() {
        Set<Class<? extends ClientHttpRequestInterceptor>> interceptors = restTemplate.getInterceptors().stream().map(interceptor -> interceptor.getClass()).collect(Collectors.toSet());

        assertTrue(interceptors.contains(RestRequestTimerInterceptor.class));
        assertTrue(interceptors.contains(LoadBalancerInterceptor.class));
        assertTrue(interceptors.contains(CorrelationIdInterceptor.class));
        assertFalse(interceptors.contains(SlowDownRestInterceptor.class));
    }

    @Test
    public void verifySystemRestTemplate() {
        Set<Class<? extends ClientHttpRequestInterceptor>> interceptors = systemRestTemplate.getInterceptors().stream().map(interceptor -> interceptor.getClass()).collect(Collectors.toSet());
        assertTrue(interceptors.contains(LoadBalancerInterceptor.class));
        //system request have no request context, so cannot / must not work with correlation id
        assertFalse(interceptors.contains(CorrelationIdInterceptor.class));
    }
}
