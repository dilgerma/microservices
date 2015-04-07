package de.effectivetrainings.billy.fastbill.config;

import com.codahale.metrics.MetricRegistry;
import com.google.common.collect.Lists;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillUserData;
import de.effectivetrainings.billy.fastbill.repository.FastbillMockRepository;
import de.effectivetrainings.billy.fastbill.repository.FastbillRepositoryImpl;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import de.effectivetrainings.support.rest.UserRestTemplate;
import de.effectivetrainings.support.rest.resilience.RetryableRibbonLoadBalancerClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

/**
 *
 */
@Configuration
@Slf4j
public class RestConfig {

    @Profile(Profiles.PROD)
    @Bean
    public FastbillRepository fastbillRepository(@Value("${fastbill.api.uri}") URI fastbillApiUri, FastbillUserData fastbillUserData, CorrelationId correlationId, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        return new FastbillRepositoryImpl(fastbillApiUri.toString(), restTemplate(restRequestTimerInterceptor), fastbillUserData, correlationId);
    }

    @Profile(Profiles.MOCK)
    @Bean
    public FastbillRepository fastbillRepositoryMock(FastbillUserData fastbillUserData) {
        return new FastbillMockRepository();
    }

    @Bean
    @UserRestTemplate
    public RestTemplate restTemplate(RestRequestTimerInterceptor restRequestTimerInterceptor) {

        RestTemplate template = new RestTemplate();

        List<HttpMessageConverter<?>> messageConverters = template.getMessageConverters();
            /*
            * Hack Fastbill API, as they only send "text/plain", we need
            * to tweak JacksonConverter, so that it also supports text/plain
            * Media Types.
            * */
        MappingJackson2HttpMessageConverter jacksonConv = (MappingJackson2HttpMessageConverter) messageConverters.stream()
                .filter((converter) -> (converter instanceof MappingJackson2HttpMessageConverter))
                .findFirst().get();
        jacksonConv.setSupportedMediaTypes(Lists.newArrayList(MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN));

        template.setMessageConverters(Lists.newArrayList(messageConverters));
        template.setInterceptors(Arrays.asList(restRequestTimerInterceptor));

        return template;
    }

    @Bean
    public RestRequestTimerInterceptor registry(MetricRegistry registry) {
        return new RestRequestTimerInterceptor(registry);
    }

    @Bean
    @ConditionalOnProperty(value = "rest.client.retries", matchIfMissing = false)
    public RetryableRibbonLoadBalancerClient loadBalancerClient(@Value("${rest.client.retries}") int maxRetries, SpringClientFactory springClientFactory) {
        log.info("Building Retryable Ribbon Loadbalancer. {} Retries configured", maxRetries);
        return new RetryableRibbonLoadBalancerClient(maxRetries, springClientFactory);
    }

}
