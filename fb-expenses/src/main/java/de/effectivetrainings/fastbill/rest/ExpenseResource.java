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


package de.effectivetrainings.fastbill.rest;


import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.fastbill.domain.Expenses;
import de.effectivetrainings.support.rest.UserRestTemplate;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
@RequestMapping("/expenses")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class ExpenseResource {

    private RestTemplate restTemplate;

    private String expenseUri;

    private CorrelationId correlationId;

    @Autowired
    public ExpenseResource(@Value("${fb.repository.expenses}") String expenseUri, @UserRestTemplate RestTemplate restTemplate, CorrelationId correlationId) {
        this.restTemplate = restTemplate;
        this.expenseUri = expenseUri;
        this.correlationId = correlationId;
    }

    @RequestMapping
    public Expenses expenses() {
        log.info("Requesting all expenses for correlation id : {}", correlationId.getCorrelationId());
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<Expenses> expenses = restTemplate.exchange(expenseUri, HttpMethod.GET, requestEntity, Expenses.class);
        return expenses.getBody();
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected void handle(Exception e) {
        log.warn("Resource ERROR", e);
    }
}
