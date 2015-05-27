package de.effectivetrainings.billy.expenses.rest.inbound;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import de.effectivetrainings.billy.expenses.domain.Expense;
import lombok.Getter;

import java.util.List;

/**
 *
 */
public class FbExpenses {

    @Getter
    @JsonUnwrapped
    private List<FbExpense> expenses;

    @JsonCreator
    public FbExpenses(@JsonProperty("expenses") List<FbExpense> expenses) {
        this.expenses = expenses;
    }

}
