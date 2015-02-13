package de.effectivetrainings.billing.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.List;

/**
 *
 */
public class Expenses implements Serializable {

    private List<Expense> expenses;

    @JsonCreator
    public Expenses(@JsonProperty("expenses") List<Expense> expenses) {
        this.expenses = expenses;
    }

    public List<Expense> getExpenses() {
        return expenses;
    }
}
