package de.effectivetrainings.billy.reporting.rest.outbound;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collections;
import java.util.List;

public class ReportValue {

    @JsonProperty("totals")
    private final AmountValue totals;

    @JsonProperty("income")
    private List<ReportItemValue> income;

    @JsonProperty("expense")
    private List<ReportItemValue> expense;

    public ReportValue(AmountValue totals, List<ReportItemValue> income, List<ReportItemValue> expense) {
        this.income = Collections.unmodifiableList(income);
        this.expense = Collections.unmodifiableList(expense);
        this.totals = totals;
    }
}
