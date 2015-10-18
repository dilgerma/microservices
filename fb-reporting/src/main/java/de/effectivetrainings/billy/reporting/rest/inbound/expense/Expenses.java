package de.effectivetrainings.billy.reporting.rest.inbound.expense;

import com.fasterxml.jackson.annotation.JsonCreator;
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
    public Expenses(List<Expense> expenses) {
        this.expenses = expenses;
    }

}
