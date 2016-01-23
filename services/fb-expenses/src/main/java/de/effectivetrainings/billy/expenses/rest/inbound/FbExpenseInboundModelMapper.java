package de.effectivetrainings.billy.expenses.rest.inbound;

import de.effectivetrainings.billy.expenses.domain.Amount;
import de.effectivetrainings.billy.expenses.domain.Expense;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
public class FbExpenseInboundModelMapper {

    public List<Expense> toExpense(List<FbExpense> expenses) {
        return expenses.stream().map(expense -> toExpense(expense)).collect(Collectors.toList());
    }

    public Expense toExpense(FbExpense fbExpense) {
        return new Expense(fbExpense.getOrganization(), fbExpense.getInvoiceNumber(), fbExpense.getInvoiceDate(), fbExpense.getPaidDate(), toAmount(fbExpense.getAmountValue()), fbExpense.getComment());
    }

    private Amount toAmount(FbExpenseAmount amountValue) {
        return new Amount(amountValue.getVatTotal(), amountValue.getSubTotal(), amountValue.getTotal());
    }


}
