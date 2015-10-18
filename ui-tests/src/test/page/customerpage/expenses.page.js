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
                ExpensePage.prototype.openInvoices = function () {
                    element(by.css('a[ui-sref="ausgaben"]')).click();
                    browser.waitForAngular();
                };
                ExpensePage.prototype.loadInvoices = function () {
                    element(by.id('expenses.load')).click();
                    browser.waitForAngular();
                };
                return ExpensePage;
            })();
            uitest.ExpensePage = ExpensePage;
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=expenses.page.js.map