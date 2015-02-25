package de.effectivetrainings.fastbill.config;

import com.google.common.collect.Lists;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.fastbill.FastbillRepository;
import de.effectivetrainings.fastbill.repository.FastbillRepositoryImpl;
import de.effectivetrainings.fastbill.FastbillUserData;
import de.effectivetrainings.fastbill.repository.FastbillMockRepository;
import de.effectivetrainings.spring.metrics.MetricsProvider;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

/**
 *
 */
@Configuration
public class RestConfig {

    @Profile(Profiles.PROD)
    @Bean
    public FastbillRepository fastbillRepository(FastbillUserData fastbillUserData, CorrelationId correlationId, RestRequestTimerInterceptor restRequestTimerInterceptor) {
        return new FastbillRepositoryImpl(restTemplate(restRequestTimerInterceptor), fastbillUserData, correlationId);
    }

    @Profile(Profiles.MOCK)
    @Bean
    public FastbillRepository fastbillRepositoryMock(FastbillUserData fastbillUserData) {
        return new FastbillMockRepository();
    }

    @Bean
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
    public RestRequestTimerInterceptor restRequestTimerInterceptor(MetricsProvider metricsProvider) {
        //TODO dilgerm - fix magic string
        return new RestRequestTimerInterceptor(metricsProvider);
    }

}
