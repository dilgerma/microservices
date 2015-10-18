///ts:ref=reference
/// <reference path="../../reference.ts"/> ///ts:ref:generated
var effectivetrainings;
(function (effectivetrainings) {
    var fb;
    (function (fb) {
        var uitest;
        (function (uitest) {
            var ExpensePage = (function () {
                function ExpensePage(uri) {
                    this.uri = uri;
                }
                ExpensePage.prototype.find = function () {
                    browser.get(this.uri);
                };
                ExpensePage.prototype.openExpenses = function () {
                    element(by.css('a[ui-sref="ausgaben"]')).click();
                    browser.waitForAngular();
                };
                ExpensePage.prototype.loadExpenses = function () {
                    element(by.id('expenses.load')).click();
                    browser.waitForAngular();
                };
                ExpensePage.prototype.verifyExpensesLoaded = function () {
                    var content = element(by.tagName("pre")).getText();
                    //currently based on mock data...
                    expect(content).toContain('ORGANIZATION": "effective trainings"');
                };
                return ExpensePage;
            })();
            uitest.ExpensePage = ExpensePage;
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=expenses.page.js.map