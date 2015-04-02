///ts:ref=invoicepage
/// <reference path="../page/invoicepage/invoice.page.ts"/> ///ts:ref:generated
///ts:ref=reference
/// <reference path="../reference.ts"/> ///ts:ref:generated
var effectivetrainings;
(function (effectivetrainings) {
    var fb;
    (function (fb) {
        var uitest;
        (function (uitest) {
            describe("load invoices page", function () {
                var invoicePage = new uitest.InvoicePage(browser.baseUrl);
                it("should open", function () {
                    invoicePage.find();
                    invoicePage.openInvoices();
                    invoicePage.loadInvoices();
                    invoicePage.verifyInvoicesLoaded();
                });
            });
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=invoice.spec.js.map