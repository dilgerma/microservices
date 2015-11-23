package de.effectivetrainings.billy.reporting.domain.repository;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.client.RestOperations;

import java.net.URI;
import java.util.function.Supplier;

/**
 *
 */
@Slf4j
public class RestDataSource<T> implements Supplier<T> {

    private final RestOperations restTemplate;
    private final URI uri;
    private final Class<T> type;

    public RestDataSource(URI uri, RestOperations restTemplate, Class<T> type) {
        this.uri = uri;
        this.restTemplate = restTemplate;
        this.type = type;
    }

    @Override
    public T get() {
        return restTemplate.getForEntity(uri, type).getBody();
    }

    public T get(RestParameterFilter restParameterFilter) {
        String url = restParameterFilter.apply(uri).toUriString();
        log.debug("Requesting invoices for {} and type: {}", url, type);
        return restTemplate.getForEntity(url, type).getBody();
    }
}
