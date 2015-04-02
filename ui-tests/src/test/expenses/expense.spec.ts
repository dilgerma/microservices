///ts:ref=expensespage
/// <reference path="../page/expensespage/expenses.page.ts"/> ///ts:ref:generated
///ts:ref=reference
/// <reference path="../reference.ts"/> ///ts:ref:generated
module effectivetrainings.fb.uitest {

    describe("load expenses page", function () {

        var expensesPage = new ExpensePage(browser.baseUrl);

        it("should open", function () {
            expensesPage.find();
            expensesPage.openExpenses();
            expensesPage.loadExpenses();
            expensesPage.verifyExpensesLoaded();
        });
    });
}