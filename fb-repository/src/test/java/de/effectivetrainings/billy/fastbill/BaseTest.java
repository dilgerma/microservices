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


package de.effectivetrainings.billy.fastbill;


import com.google.common.collect.Lists;
import de.effectivetrainings.billy.fastbill.domain.*;
import de.effectivetrainings.billy.fastbill.rest.ExpenseResource;
import de.effectivetrainings.billy.fastbill.rest.InvoiceResource;
import de.effectivetrainings.billy.fastbill.rest.ReportResource;
import lombok.AccessLevel;
import lombok.Getter;
import org.junit.Before;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Date;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;

/**
* @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
* @since: 01.04.14
*/
public class BaseTest {

    private MockMvc mockMvc;

    @Mock
    protected FastbillRepository fastbillRepository;

    @Getter(AccessLevel.PROTECTED)
    private InvoiceResource invoiceResource;
    @Getter(AccessLevel.PROTECTED)
    private ExpenseResource expenseResource;
    @Getter(AccessLevel.PROTECTED)
    private ReportResource reportResource;

    @Before
    public void setUp() {

        MockitoAnnotations.initMocks(this);

        setupMockResponses();

        invoiceResource =
            new InvoiceResource(fastbillRepository);
        expenseResource =
            new ExpenseResource(fastbillRepository);
        reportResource =
            new ReportResource(invoiceResource, expenseResource);

        mockMvc = MockMvcBuilders.standaloneSetup(invoiceResource, expenseResource, reportResource
        ).build();
    }

    private void setupMockResponses() {

        Date paidDate = new Date();

        Invoice invoice = new Invoice(1L, 123L, new Amount(1D, 1D, 1D), "Orga1", paidDate, paidDate, "", 1);
        Invoice invoice2 = new Invoice(2L, 124L, new Amount(2D, 2D, 1D),"Orga2", paidDate, paidDate, "", 1);

        Expense expense = new Expense("Amazon", "INV-01", paidDate, paidDate, new Amount(1D, 1D, 2D), "");
        Expense expense2 = new Expense("CortalConsors", "INV-02", paidDate, paidDate, new Amount(1D, 1D, 2D), "");


        FastbillResponse fbRootResponse = new FastbillResponse();
        Response resp = new Response();
        resp.setExpenses(Lists.newArrayList(expense, expense2));
        resp.setInvoices(
            Lists.newArrayList(invoice, invoice2));
        fbRootResponse.setResponse(resp);
        when(fastbillRepository.request(any(FastbillRequestParameter.class))).thenReturn(fbRootResponse);
    }



    protected MockMvc getMockMVC() {
        return mockMvc;
    }

}
