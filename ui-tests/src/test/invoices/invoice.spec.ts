///ts:ref=invoicepage
/// <reference path="../page/invoicepage/invoice.page.ts"/> ///ts:ref:generated
///ts:ref=reference
/// <reference path="../reference.ts"/> ///ts:ref:generated
module effectivetrainings.fb.uitest {

    describe("load invoices page", function () {

        var invoicePage = new InvoicePage(browser.baseUrl);

        it("should open", function () {
            invoicePage.find();
            invoicePage.openInvoices();
            invoicePage.loadInvoices();
            invoicePage.verifyInvoicesLoaded();
        });
    });
}