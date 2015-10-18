package de.effectivetrainings.billy.expenses.rest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.LocalDate;
import java.time.Year;

@Slf4j
public class FbExpenseParameters {

    private static final String MONTH_REQUEST_PARAM = "month";
    private static final String YEAR_REQUEST_PARAM = "year";

    private LocalDate from;
    private LocalDate to;

    /**
     * takes the month and year from 'from', as the backend does not support
     * real data parameters, but just accepts month as int and year.
     *
     * @param from
     */
    public FbExpenseParameters(LocalDate from, LocalDate to) {
        this.from = from;
        this.to = to;
    }

    public UriComponentsBuilder apply(String uri) {
        UriComponentsBuilder uriComponentsBuilder = UriComponentsBuilder.fromUriString(uri);
        if (isRequestingYear()) {
            log.debug("Requesting year invoices for {}", from.getYear());
            uriComponentsBuilder
                    .queryParam(YEAR_REQUEST_PARAM, from.getYear());
        } else if (from != null) {
            log.debug("Requesting month invoices for {}", from.getMonthValue());
            uriComponentsBuilder.queryParam(MONTH_REQUEST_PARAM, from.getMonthValue())
                    .queryParam(YEAR_REQUEST_PARAM, from.getYear());
        }
        return uriComponentsBuilder;
    }

    private boolean isRequestingYear() {
        return from != null && to != null && Year.of(from.getYear()).atDay(1).equals(from) && Year.of(to.getYear()).atDay(Year.of(to.getYear()).length()).equals(to);
    }
}
