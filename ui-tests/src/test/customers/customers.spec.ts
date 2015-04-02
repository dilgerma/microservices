///ts:ref=customerpage
/// <reference path="../page/customerpage/customer.page.ts"/> ///ts:ref:generated
///ts:ref=reference
/// <reference path="../reference.ts"/> ///ts:ref:generated
module effectivetrainings.fb.uitest {

    describe("load customers page", function () {

        var customerPage = new CustomerPage(browser.baseUrl);

        it("should open", function () {
            customerPage.find();
            customerPage.openCustomers();
            customerPage.loadCustomers();
            customerPage.verifyCustomerLoaded();
        });
    });
}