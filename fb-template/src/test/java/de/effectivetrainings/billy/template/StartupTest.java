package de.effectivetrainings.billy.template;

import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.SystemRequestTemplate;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.correlation.CorrelationIdInterceptor;
import de.effectivetrainings.support.rest.nag.SlowDownRestInterceptor;
import de.effectivetrainings.billy.template.documents.TemplateDocumentRepository;
import de.effectivetrainings.billy.template.rest.TemplateDocumentResource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalancerInterceptor;
import org.springframework.http.client.ClientHttpRequestInterceptor;
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
@TestPropertySource({"classpath:application.properties", "classpath:test.properties"})
public class StartupTest {

    @Autowired
    private TemplateDocumentRepository templateDocumentRepository;

    @Autowired
    private TemplateDocumentResource templateDocumentResource;

    @Autowired
    @UserRestTemplate
    private RestTemplate restTemplate;

    @Autowired
    @SystemRequestTemplate
    RestTemplate systemRestTemplate;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
    }

    @Test
    public void verifyInterceptors() {
        Set<Class<? extends ClientHttpRequestInterceptor>> interceptors = restTemplate.getInterceptors().stream().map(interceptor -> interceptor.getClass()).collect(Collectors.toSet());

        assertTrue(interceptors.contains(RestRequestTimerInterceptor.class));
        assertFalse(interceptors.contains(LoadBalancerInterceptor.class));
        assertTrue(interceptors.contains(CorrelationIdInterceptor.class));
        assertTrue(interceptors.contains(SlowDownRestInterceptor.class));
    }

    @Test
    public void verifySystemRestTemplate() {
        Set<Class<? extends ClientHttpRequestInterceptor>> interceptors = systemRestTemplate.getInterceptors().stream().map(interceptor -> interceptor.getClass()).collect(Collectors.toSet());
        assertFalse(interceptors.contains(LoadBalancerInterceptor.class));
        //system request have no request context, so cannot / must not work with correlation id
        assertFalse(interceptors.contains(CorrelationIdInterceptor.class));
    }
}
