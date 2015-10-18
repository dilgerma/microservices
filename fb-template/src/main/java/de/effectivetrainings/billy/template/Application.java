package de.effectivetrainings.billy.template;

import com.mongodb.MongoClient;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.correlation.DefaultCorrelationId;
import de.effectivetrainings.correlation.request.CorrelationIdFilter;
import de.effectivetrainings.spring.influx.EnableInflux;
import de.effectivetrainings.support.rest.EnableRestSupport;
import de.effectivetrainings.billy.template.config.MetricsConfig;
import de.effectivetrainings.billy.template.config.RestConfig;
import de.effectivetrainings.billy.template.db.TemplateDB;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.*;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.servlet.Filter;
import javax.servlet.http.HttpServletRequest;

/**
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = "de.effectivetrainings.billy.template.rest")
@EnableWebMvc
@EnableEurekaClient
@EnableRestSupport
@EnableInflux
@Import({RestConfig.class, MetricsConfig.class})
public class Application extends AbstractMongoConfiguration {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Value("${mongoDb.host}")
    private String mongoHost;
    @Value("${mongoDb.port}")
    private Integer mongoPort;

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
        return TemplateDB.DB_NAME;
    }

    @Override
    @Bean
    public MongoClient mongo() throws Exception {
        return new MongoClient(mongoHost, mongoPort);
    }
}
