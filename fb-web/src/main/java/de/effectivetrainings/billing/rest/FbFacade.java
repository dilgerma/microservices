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


package de.effectivetrainings.billing.rest;


import de.effectivetrainings.billing.config.ServicesConfig;
import de.effectivetrainings.billing.domain.Expenses;
import de.effectivetrainings.billing.domain.Invoices;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class FbFacade {

    private RestTemplate restTemplate;

    private ServicesConfig servicesConfig;

    @Autowired
    public FbFacade(ServicesConfig servicesConfig, RestTemplate restTemplate) {
        this.servicesConfig = servicesConfig;
        this.restTemplate = restTemplate;
    }

    @RequestMapping(value = "invoices")
    public Invoices invoices() {
        log.info("Requesting all valid invoices");
        return request(servicesConfig.getInvoiceBackendUri(), Invoices.class);

    }

    @RequestMapping(value = "expenses")
    public Expenses expenses() {
        log.info("Requesting all expenses");
        return request(servicesConfig.getExpenseBackendURI(), Expenses.class);
    }

    private <T> T request(String uri, Class<T> target) {
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<T> expenseResponse = restTemplate.exchange(uri, HttpMethod.GET, requestEntity, target);
        return expenseResponse.getBody();
    }

    /**
     * TODO handle client exceptions correctly...
     * @param ex
     */
    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public void handle(Exception ex) {
        log.error("Error in UI",ex);
    }

}
