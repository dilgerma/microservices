package de.effectivetrainings.billy.expenses.rest.filter;

import de.effectivetrainings.billy.expenses.domain.Expense;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Collectors;

public class ExpensePaidDateFilter {

    private LocalDate from;
    private LocalDate to;

    public ExpensePaidDateFilter(LocalDate from, LocalDate to) {
        this.from = from;
        this.to = to;
    }

    public List<Expense> apply(List<Expense> expenses) {
        return expenses.stream().filter(Expense::isPaid).filter(expense -> (from == null || from.isBefore(invoicePaidDate(expense))) && (to == null || to.isAfter(invoicePaidDate(expense)))).collect(Collectors.toList());
    }

    private LocalDate invoicePaidDate(Expense expense) {
        return expense.getPaidDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }

}
