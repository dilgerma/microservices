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


import de.effectivetrainings.billy.fastbill.domain.Filter;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.test.web.servlet.MvcResult;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
* @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
* @since: 01.04.14
*/
public class ExpenseResourceTest extends BaseTest {

    @Test
    public void requestExpenses() throws Exception {
        MvcResult result = getMockMVC().perform(get("/rest/fastbill/expenses"))
            .andExpect(status().isOk()).andReturn();
        verify(fastbillRepository).request(any(FastbillRequestParameter.class));
    }

    @Test
    public void requestExpensesWithId() throws Exception {
        MvcResult result = getMockMVC().perform(get("/rest/fastbill/expenses/2"))
            .andExpect(status().isOk()).andReturn();
        ArgumentCaptor<FastbillRequestParameter> filterCaptor = ArgumentCaptor.forClass(FastbillRequestParameter.class);
        verify(fastbillRepository).request(filterCaptor.capture());

        FastbillRequestParameter captured = filterCaptor.getValue();
        assertEquals("2", captured.getFilters().getFilters().get(0).getFilterValue());
    }

    @Test
    public void requestExpensesForMonth() throws Exception {
        MvcResult result = getMockMVC().perform(get("/rest/fastbill/expenses?month=1&year=2014"))
            .andExpect(status().isOk()).andReturn();
        ArgumentCaptor<FastbillRequestParameter> filterCaptor = ArgumentCaptor.forClass(FastbillRequestParameter.class);
        verify(fastbillRepository).request(filterCaptor.capture());

        FastbillRequestParameter captured = filterCaptor.getValue();
        List<Filter> requestFilters = captured.getFilters().getFilters();

        assertTrue(requestFilters.contains(new Filter(Filter.MONTH, "1")));
        assertTrue(requestFilters.contains(new Filter(Filter.YEAR, "2014")));
    }


}
