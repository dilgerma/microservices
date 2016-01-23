package de.effectivetrainings.billy.reporting.rest.inbound.invoice;

import de.effectivetrainings.billy.reporting.domain.repository.RestParameterFilter;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;

public class InvoicePeriodFilter implements RestParameterFilter {

    private final LocalDate from;
    private final LocalDate to;

    public InvoicePeriodFilter(LocalDate from, LocalDate to) {
        this.from = from;
        this.to = to;
    }

    @Override
    public UriComponentsBuilder apply(URI uri) {
        return UriComponentsBuilder.fromUri(uri).queryParam("from", from).queryParam("to", to);
    }
}
