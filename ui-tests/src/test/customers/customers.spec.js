///ts:ref=customerpage
/// <reference path="../page/customerpage/customer.page.ts"/> ///ts:ref:generated
///ts:ref=reference
/// <reference path="../reference.ts"/> ///ts:ref:generated
var effectivetrainings;
(function (effectivetrainings) {
    var fb;
    (function (fb) {
        var uitest;
        (function (uitest) {
            describe("load customers page", function () {
                var customerPage = new uitest.CustomerPage(browser.baseUrl);
                it("should open", function () {
                    customerPage.find();
                    customerPage.openCustomers();
                    customerPage.loadCustomers();
                    customerPage.verifyCustomerLoaded();
                });
            });
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=customers.spec.js.map