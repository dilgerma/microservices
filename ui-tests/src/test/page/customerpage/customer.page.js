///ts:ref=reference
/// <reference path="../../reference.ts"/> ///ts:ref:generated
var effectivetrainings;
(function (effectivetrainings) {
    var fb;
    (function (fb) {
        var uitest;
        (function (uitest) {
            var CustomerPage = (function () {
                function CustomerPage(uri) {
                    this.uri = uri;
                }
                CustomerPage.prototype.find = function () {
                    browser.get(this.uri);
                };
                CustomerPage.prototype.openCustomers = function () {
                    element(by.css('a[ui-sref="kunden"]')).click();
                    browser.waitForAngular();
                };
                CustomerPage.prototype.loadCustomers = function () {
                    element(by.id('customers.load')).click();
                    browser.waitForAngular();
                };
                CustomerPage.prototype.verifyCustomerLoaded = function () {
                    var content = element(by.tagName("pre")).getText();
                    //currently based on mock data...
                    expect(content).toContain("effective trainings");
                };
                return CustomerPage;
            })();
            uitest.CustomerPage = CustomerPage;
        })(uitest = fb.uitest || (fb.uitest = {}));
    })(fb = effectivetrainings.fb || (effectivetrainings.fb = {}));
})(effectivetrainings || (effectivetrainings = {}));
//# sourceMappingURL=customer.page.js.map