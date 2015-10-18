package de.effectivetrainings.billy.reporting.domain.repository;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public interface RestParameterFilter {
    UriComponentsBuilder apply(URI uri);
}
