///ts:ref=reference
/// <reference path="../../reference.ts"/> ///ts:ref:generated
module effectivetrainings.fb.uitest {

    export class ExpensePage {

        constructor(public uri:string) {
        }

        find() {
            browser.get(this.uri);
        }

        openExpenses() {
            element(by.css('a[ui-sref="ausgaben"]')).click();
            browser.waitForAngular();
        }

        loadExpenses() {
            element(by.id('expenses.load')).click();
            browser.waitForAngular();
        }

        verifyExpensesLoaded() {
            var content = element(by.tagName("pre")).getText();
            //currently based on mock data...
            expect(content).toContain('ORGANIZATION": "effective trainings"');
        }

    }
}