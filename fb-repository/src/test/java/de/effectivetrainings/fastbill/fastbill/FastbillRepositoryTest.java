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


package de.effectivetrainings.fastbill.fastbill;


import de.effectivetrainings.fastbill.Application;
import de.effectivetrainings.fastbill.FastbillRepository;
import de.effectivetrainings.fastbill.FastbillRequestParameter;
import de.effectivetrainings.fastbill.ServiceType;
import de.effectivetrainings.fastbill.json.FastbillResponse;
import de.effectivetrainings.fastbill.json.Filter;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.ZoneId;
import java.util.Date;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;

/**
* @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
* @since: 17.03.14
*/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_CLASS)
@ActiveProfiles("dev")
@ComponentScan(basePackages = "de.effectivetrainings.domain.fastbill")
@PropertySource(value = "classpath:config/application.yml")
@Ignore
public class FastbillRepositoryTest {

    @Autowired
    private FastbillRepository repository;

    //TODO runs against real fastbill
    @Test
    public void testCallFastbill() {
        FastbillResponse reponse = repository.request(new FastbillRequestParameter(ServiceType.INVOICES, -1, Filter.NONE));
        assertTrue(reponse.getResponse().getInvoices().size() >= 31);
    }

    @Test
    public void invoicesWithFilter() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.INVOICES, -1, new Filter(Filter.INVOICE_NUMBER, "140201")));
        assertEquals(1, response.getResponse().getInvoices().size());
        assertThat(response.getResponse().getInvoices().get(0).getAmountValue().getTotal(), is(10974.775));
    }

    @Test
    public void invoicesByMonth() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.INVOICES, -1, new Filter(Filter.MONTH, "1"), new Filter(Filter.YEAR, "2014")));
        assertEquals(1, response.getResponse().getInvoices().size());
    }

    @Test
    public void testGetExenses() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.EXPENSES, -1, Filter.NONE));
        assertNotNull(response);
        assertNotNull(response.getResponse().getExpenses());
        assertFalse(response.getResponse().getExpenses().isEmpty());
    }

    @Test
    public void testGetExensesForMonth() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.EXPENSES, -1, new Filter(Filter.MONTH, "2"), new Filter(Filter.YEAR, "2014")));
        assertNotNull(response);
        assertNotNull(response.getResponse().getExpenses());
        assertEquals(1, response.getResponse().getExpenses().size());
    }

    @Test
    public void getTimes() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.TIMES, -1, Filter.NONE));
        assertNotNull(response);
        assertNotNull(response.getResponse().getTimes());
        assertFalse(response.getResponse().getTimes().isEmpty());
    }

    @Test
    public void getTimesApril2Days() {

        LocalDate dateTime = LocalDate.of(2014, Month.APRIL,7);
        LocalDate dateTime2 = LocalDate.of(2014, Month.APRIL,8);

        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.TIMES, -1, new Filter(Filter.START_DATE,fromLocalDate(dateTime)), new Filter(Filter.END_DATE, fromLocalDate(dateTime2))));
        assertNotNull(response);
        assertNotNull(response.getResponse().getTimes());
        assertFalse(response.getResponse().getTimes().isEmpty());
        assertEquals(3, response.getResponse().getTimes().size());
    }

    @Test
    public void getProjects() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.PROJECT, -1, Filter.NONE));
        assertNotNull(response);
        assertNotNull(response.getResponse().getProjects());
        assertFalse(response.getResponse().getProjects().isEmpty());
    }

    @Test
    public void getCustomers() {
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.CUSTOMER, -1, Filter.NONE));
        assertNotNull(response);
        assertNotNull(response.getResponse().getCustomers());
        assertFalse(response.getResponse().getCustomers().isEmpty());
    }

    @Test
    public void getCustomersById() {
        String customerId = "734368";
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.CUSTOMER, -1, new Filter(Filter.CUSTOMER_ID, customerId)));
        assertNotNull(response);
        assertNotNull(response.getResponse().getCustomers());
        assertEquals(1, response.getResponse().getCustomers().size());
    }

    @Test
    public void getCustomersBySeveralId() {
        String customerId1 = "734368";
        String customerId2 = "356378";
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.CUSTOMER, -1, new Filter(Filter.CUSTOMER_ID, customerId1), new Filter(Filter.CUSTOMER_ID, customerId2)));
        assertNotNull(response);
        assertNotNull(response.getResponse().getCustomers());
        //doesnt work
        assertEquals(1, response.getResponse().getCustomers().size());
    }

    @Test
    public void getProjectsById() {
        String projectId = "13927";
        FastbillResponse response = repository.request(new FastbillRequestParameter(ServiceType.PROJECT, -1, new Filter(Filter.PROJECT_ID, projectId)));
        assertNotNull(response);
        assertNotNull(response.getResponse().getProjects());
        //fast bill bug, fails as soon as API is fixed, should be = 1, not > 1
        assertTrue(response.getResponse().getProjects().size() > 1);
    }

    private Date fromLocalDate(LocalDate localDate) {
       return Date.from(LocalDateTime.from(localDate).atZone(ZoneId.systemDefault()).toInstant());
    }

}
