package de.effectivetrainings.template;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.template.config.MetricsConfig;
import de.effectivetrainings.template.config.RestConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.*;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan
@EnableWebMvc
@Import({RestConfig.class, MetricsConfig.class})
@EnableMongoRepositories
public class Application extends AbstractMongoConfiguration {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public Filter correlationIdFilter() {
        return new CorrelationIdFilter();
    }

    @Bean
    @Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.INTERFACES)
    public CorrelationId correlationId(HttpServletRequest servletRequest) {
        return new DefaultCorrelationId(servletRequest.getHeader(CorrelationId.CORRELATION_ID_HEADER_KEY));
    }

    @Override
    protected String getDatabaseName() {
        return "effectivetrainings.fb.templates";
    }

    @Override
    public Mongo mongo() throws Exception {
        return new MongoClient();
    }
}
