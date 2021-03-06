package de.effectivetrainings.billy.fastbill.config;

import com.codahale.metrics.MetricRegistry;
import com.google.common.collect.Lists;
import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillUserData;
import de.effectivetrainings.billy.fastbill.repository.FastbillMockRepository;
import de.effectivetrainings.billy.fastbill.repository.FastbillRepositoryImpl;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.spring.metrics.RestRequestTimerInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestOperations;
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

    @Value("${fastbill.api.uri}")
    private URI fastbillApiUri;

    @Autowired
    private FastbillUserData fastbillUserData;

    @Value("${rest.client.connectionTimeout:-1}")
    private Integer connectionTimeout;

    @Value("${rest.client.readTimeout:-1}")
    private Integer readTimeout;

    @Autowired
    private MetricRegistry metricRegistry;

    @Autowired
    private CorrelationId correlationId;

    @Profile(Profiles.PROD)
    @Bean
    public FastbillRepository fastbillRepository() {
        return new FastbillRepositoryImpl(fastbillApiUri.toString(), restTemplate(), fastbillUserData, correlationId);
    }

    @Profile(Profiles.MOCK)
    @Bean
    public FastbillRepository fastbillRepositoryMock() {
        return new FastbillMockRepository();
    }

    @Bean
    @Qualifier("userRestTemplate")
    public RestOperations restTemplate() {

        RestTemplate template = new RestTemplate(clientHttpRequestFactory());

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
        template.setInterceptors(Arrays.asList(restTimer()));

        return template;
    }

    @Bean
    public RestRequestTimerInterceptor restTimer() {
        return new RestRequestTimerInterceptor(metricRegistry);
    }

    @Bean(name = "restClientHttpFactory")
       public ClientHttpRequestFactory clientHttpRequestFactory() {
           final SimpleClientHttpRequestFactory simpleClientHttpRequestFactory = new SimpleClientHttpRequestFactory();
           simpleClientHttpRequestFactory.setConnectTimeout(connectionTimeout);
           simpleClientHttpRequestFactory.setReadTimeout(readTimeout);
           return simpleClientHttpRequestFactory;
       }

}
