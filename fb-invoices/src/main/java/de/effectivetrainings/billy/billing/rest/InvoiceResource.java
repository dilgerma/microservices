/**
 * Copyright (c) 2013, Martin Dilger - Effective Trainings & Consulting - EffectiveTrainings.de
 * All rights reserved.
 * <p>
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of Effective Trainings & Consulting nor the
 * names of its contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 * <p>
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EffectiveTrainings BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


package de.effectivetrainings.billy.billing.rest;


import de.effectivetrainings.billy.billing.domain.Invoices;
import de.effectivetrainings.billy.billing.rest.filter.InvoicePaidDateFilter;
import de.effectivetrainings.billy.billing.rest.inbound.FbInboundModelMapper;
import de.effectivetrainings.billy.billing.rest.inbound.model.FbInvoices;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.support.rest.UserRestTemplate;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.security.oauth2.client.resource.UserRedirectRequiredException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/invoices")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class InvoiceResource {

    private RestTemplate restTemplate;

    private String invoiceUri;

    private FbInboundModelMapper inboundModelMapper;

    private CorrelationId correlationId;

    @Autowired
    public InvoiceResource(@Value("${fb.repository.invoices}") String invoiceUri, @UserRestTemplate RestTemplate restTemplate, FbInboundModelMapper inboundModelMapper, CorrelationId correlationId) {
        this.restTemplate = restTemplate;
        this.invoiceUri = invoiceUri;
        this.inboundModelMapper = inboundModelMapper;
        this.correlationId = correlationId;
    }

    @RequestMapping
    public Invoices invoices(@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam(value = "from", required = false) LocalDate from, @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam(value = "to", required = false) LocalDate to) {
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());

        log.info("Requesting all invoices for correlation id : {}, from: {}, to: {}, uriString: {}", correlationId.getCorrelationId(), from, to, invoiceUri);
        ResponseEntity<FbInvoices> responseInvoices = restTemplate.exchange(invoiceUri, HttpMethod.GET, requestEntity, FbInvoices.class);
        final FbInvoices fbInvoices = responseInvoices.getBody();
        log.info("Invoices retrieved : {}", fbInvoices);
        Invoices invoices = inboundModelMapper.toInvoices(fbInvoices);
        return new InvoicePaidDateFilter(from, to).apply(invoices);
    }

    @ExceptionHandler
    public void handle(UserRedirectRequiredException userRedirectException) {
        throw userRedirectException;
    }


    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected GenericError handle(Exception e) {
        log.error("Invoice Resource ERROR", e);
        return new GenericError(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value());
    }
}
