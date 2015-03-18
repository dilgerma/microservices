package de.effectivetrainings.spring.metrics;

import com.codahale.metrics.health.HealthCheck;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

/**
 * just tries a header connection to check if the upstream-system
 * is available.
 */
@Slf4j
public class ConnectionHealthCheck extends HealthCheck {

    private URI uri;
    private RestTemplate restTemplate;

    public ConnectionHealthCheck(URI uri, RestTemplate restTemplate) {
        this.uri = uri;
        this.restTemplate = restTemplate;

    }

    @Override
    protected Result check() throws Exception {
        try {
            log.info("Requesting Service Health Check for {}", uri);
            restTemplate.headForHeaders(uri);
            log.info("Service Health Check available for {}", uri);
            return Result.healthy(uri + "available");
        } catch (Exception e) {
            log.error("Service Health Check failed", e);
            return Result.unhealthy(uri + " not available");
        }
    }
}
