///ts:ref=reference
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module effectivetrainings.fb.uitest {

    export class CustomerPage {

        constructor(public uri:string) {
        }

        find() {
            browser.get(this.uri);
        }

        openCustomers() {
            element(by.css('a[ui-sref="kunden"]')).click();
            browser.waitForAngular();
        }

        loadCustomers() {
            element(by.id('customers.load')).click();
            browser.waitForAngular();
        }

        verifyCustomerLoaded() {
            var content = element(by.tagName("pre")).getText();
            //currently based on mock data...
            expect(content).toContain("effective trainings");
        }

    }
}