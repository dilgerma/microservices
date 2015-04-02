///ts:ref=reference
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module effectivetrainings.fb.uitest {

    export class InvoicePage {

        constructor(public uri:string) {
        }

        find() {
            browser.get(this.uri);
        }

        openInvoices() {
            element(by.css('a[ui-sref="rechnung"]')).click();
            browser.waitForAngular();
        }

        loadInvoices() {
            element(by.id('invoices.load')).click();
            browser.waitForAngular();
        }

        verifyInvoicesLoaded() {
            var content = element(by.tagName("pre")).getText();
            //currently based on mock data...
            expect(content).toContain('ORGANIZATION": "Heureka Cloud Apps"');
        }

    }
}