///ts:ref=reference
/// <reference path="../../reference.ts"/> ///ts:ref:generated
var effectivetrainings;
(function (effectivetrainings) {
    var fb;
    (function (fb) {
        var uitest;
        (function (uitest) {
            var InvoicePage = (function () {
                function InvoicePage(uri) {
                    this.uri = uri;
                }
                InvoicePage.prototype.find = function () {
                    browser.get(this.uri);
                };
                InvoicePage.prototype.openInvoices = function () {
                    element(by.css('a[ui-sref="rechnung"]')).click();
                    browser.waitForAngular();
                };
                InvoicePage.prototype.loadInvoices = function () {
                    element(by.id('invoices.load')).click();
                    browser.waitForAngular();
                };
                InvoicePage.prototype.verifyInvoicesLoaded = function () {
                    var content = element(by.tagName("pre")).getText();
                    //currently based on mock data...
                    expect(content).toContain('ORGANIZATION": "Heureka Cloud Apps"');
                };
                return InvoicePage;
            })();
            uitest.InvoicePage = InvoicePage;
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=invoice.page.js.map