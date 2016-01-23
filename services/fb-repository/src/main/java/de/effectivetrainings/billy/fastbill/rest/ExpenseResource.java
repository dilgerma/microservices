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

import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillRequestParameter;
import de.effectivetrainings.billy.fastbill.RetrieveServiceType;
import de.effectivetrainings.billy.fastbill.domain.Expense;
import de.effectivetrainings.billy.fastbill.domain.Expenses;
import de.effectivetrainings.billy.fastbill.domain.Filter;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/rest/fastbill")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class ExpenseResource extends BaseResource {

    private FastbillRepository fastbillRepository;

    @Autowired
    public ExpenseResource(FastbillRepository repository) {
        this.fastbillRepository = repository;
    }

    @RequestMapping(value = "/expenses")
    public Expenses expenses(@RequestParam(required = false, value = "month") Integer month, @RequestParam(required = false, value = "year") Integer year) {

        log.debug("Requesting Invoices for Month: {} and Year: {}", month, year);

        Filter monthFilter = month != null ? new Filter(Filter.MONTH, String.valueOf(month)) : Filter.NONE;
        Filter yearFilter = year != null ? new Filter(Filter.YEAR, String.valueOf(year)) : Filter.NONE;


        FastbillRequestParameter parameter = new FastbillRequestParameter(RetrieveServiceType.EXPENSES, monthFilter, yearFilter);
        List<Expense> expenses = fastbillRepository.request(parameter).getResponse().getExpenses();
        return new Expenses(expenses);
    }

    @RequestMapping(value = "/expenses/{invoiceNumber}")
    public List<Expense> expensesByInvoiceNumber(@PathVariable(value = "invoiceNumber") String invoiceNumber) {
        FastbillRequestParameter parameter = new FastbillRequestParameter(RetrieveServiceType.EXPENSES, new Filter(Filter.INVOICE_NUMBER, invoiceNumber));
        List<Expense> expenses = fastbillRepository.request(parameter).getResponse().getExpenses();
        return expenses;
    }
}
