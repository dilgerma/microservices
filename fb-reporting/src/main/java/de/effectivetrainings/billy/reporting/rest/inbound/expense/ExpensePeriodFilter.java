package de.effectivetrainings.billy.reporting.rest.inbound.expense;

import de.effectivetrainings.billy.reporting.domain.repository.RestParameterFilter;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;

public class ExpensePeriodFilter implements RestParameterFilter {

    private LocalDate from;
    private LocalDate to;

    public ExpensePeriodFilter(LocalDate from, LocalDate to) {
        this.from = from;
        this.to = to;
    }

    @Override
    public UriComponentsBuilder apply(URI uri) {
        return UriComponentsBuilder.fromUri(uri).queryParam("from", from).queryParam("to", to);
    }
}
