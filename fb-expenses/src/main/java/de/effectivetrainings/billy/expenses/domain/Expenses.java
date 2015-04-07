package de.effectivetrainings.billy.expenses.domain;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import lombok.Getter;

import java.util.List;

/**
 *
 */
public class Expenses {

    @Getter
    @JsonUnwrapped
    private List<Expense> expenses;

    @JsonCreator
    public Expenses(@JsonProperty("expenses") List<Expense> expenses) {
        this.expenses = expenses;
    }

}
