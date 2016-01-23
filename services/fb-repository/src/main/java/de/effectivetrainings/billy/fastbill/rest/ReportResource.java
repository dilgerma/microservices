/**
 Copyright (c) 2013, Martin Dilger - Effective Trainings & Consulting - EffectiveTrainings.de
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 * Neither the name of Effective Trainings & Consulting nor the
 names of its contributors may be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL EffectiveTrainings BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


package de.effectivetrainings.billy.fastbill.rest;


import de.effectivetrainings.billy.fastbill.domain.Expense;
import de.effectivetrainings.billy.fastbill.domain.Invoice;
import de.effectivetrainings.billy.fastbill.domain.Report;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/rest/fastbill")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class ReportResource extends BaseResource  {

    private InvoiceResource invoiceResource;
    private ExpenseResource expenseResource;

    @Autowired
    public ReportResource(InvoiceResource invoiceResource, ExpenseResource expenseResource) {
        this.invoiceResource = invoiceResource;
        this.expenseResource = expenseResource;
    }

    @RequestMapping(value = "/report")
    public Report report(@RequestParam(required = false, value = "month") Integer month, @RequestParam(required = false, value = "year") Integer year) {

        LocalDate date = LocalDate.now();

        /*
        * we handle months zero based, fastbill expects one-based.
        * */
        int monthOrDefault = (month == null || month == -1) ? -1 : month + 1;
        int yearOrDefault = year != null ? year : date.getYear();

        List<Invoice> invoices = invoiceResource.invoices(monthOrDefault, yearOrDefault).getInvoices();

        List<Expense> expenses = expenseResource.expenses(monthOrDefault, yearOrDefault).getExpenses();

        Report report = new Report(invoices, expenses, monthOrDefault, yearOrDefault);
        return report;
    }

}
