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


package de.effectivetrainings.fastbill.rest;


import de.effectivetrainings.fastbill.FastbillRepository;
import de.effectivetrainings.fastbill.FastbillRequestParameter;
import de.effectivetrainings.fastbill.ServiceType;
import de.effectivetrainings.fastbill.json.Filter;
import de.effectivetrainings.fastbill.json.Invoice;
import de.effectivetrainings.fastbill.json.Invoices;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/rest/fastbill")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class InvoiceResource extends BaseResource  {

    private FastbillRepository fastbillRepository;

    @Autowired
    public InvoiceResource(FastbillRepository repository) {
        this.fastbillRepository = repository;
    }

    @RequestMapping(value = "/invoice")
    public Invoices invoices( @RequestParam(required = false, value = "month") Integer month, @RequestParam(required = false, value = "year") Integer year) {
        log.debug("Requesting Invoices for Month: {} and Year: {}", month, year);
        /*
        * Currently Fastbill only allows to Filter by Invoice Date / Month.
        * What we want is to filter by Paid-Date / Month, so we need to load all invoices and filter manually...
        * */
        FastbillRequestParameter parameter = new FastbillRequestParameter(ServiceType.INVOICES, -1, Filter.NONE);
        List<Invoice> invoices = fastbillRepository.request(parameter).getResponse().getInvoices();
        List<Invoice> invoiceList =  invoices.stream().filter(invoice -> invoice.paidIn(month, year)).collect(Collectors.toList());
        return new Invoices(invoiceList);
    }

    @RequestMapping(value = "/invoice/{invoiceNumber}")
    public Invoices invoiceByInvoiceNumber(@PathVariable(value = "invoiceNumber") String invoiceNumber) {
        log.debug("Requesting Invoices for Invoice Number ", invoiceNumber);

        FastbillRequestParameter parameter = new FastbillRequestParameter(ServiceType.INVOICES, -1, new Filter(Filter.INVOICE_NUMBER, invoiceNumber));
        List<Invoice> invoices = fastbillRepository.request(parameter).getResponse().getInvoices();
        return new Invoices(invoices);
    }

}
