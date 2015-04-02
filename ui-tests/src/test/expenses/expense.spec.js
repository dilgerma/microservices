///ts:ref=expensespage
/// <reference path="../page/expensespage/expenses.page.ts"/> ///ts:ref:generated
///ts:ref=reference
/// <reference path="../reference.ts"/> ///ts:ref:generated
var effectivetrainings;
(function (effectivetrainings) {
    var fb;
    (function (fb) {
        var uitest;
        (function (uitest) {
            describe("load expenses page", function () {
                var expensesPage = new uitest.ExpensePage(browser.baseUrl);
                it("should open", function () {
                    expensesPage.find();
                    expensesPage.openExpenses();
                    expensesPage.loadExpenses();
                    expensesPage.verifyExpensesLoaded();
                });
            });
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=expense.spec.js.map