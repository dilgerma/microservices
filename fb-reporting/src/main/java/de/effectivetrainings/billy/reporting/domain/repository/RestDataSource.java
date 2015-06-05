package de.effectivetrainings.billy.reporting.domain.repository;

import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.function.Supplier;

/**
 *
 */
public class RestDataSource<T> implements Supplier<T> {

    private final RestTemplate restTemplate;
    private final URI uri;
    private final Class<T> type;

    public RestDataSource(URI uri, RestTemplate restTemplate, Class<T> type) {
        this.uri = uri;
        this.restTemplate = restTemplate;
        this.type = type;
    }

    @Override
    public T get() {
        return restTemplate.getForEntity(uri, type).getBody();
    }
}
