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


package de.effectivetrainings.billy.expenses.rest;


import de.effectivetrainings.billy.expenses.domain.Expense;
import de.effectivetrainings.billy.expenses.rest.filter.ExpensePaidDateFilter;
import de.effectivetrainings.billy.expenses.rest.inbound.FbExpenseInboundModelMapper;
import de.effectivetrainings.billy.expenses.rest.inbound.FbExpenses;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.support.rest.UserRestTemplate;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.List;

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

    private FbExpenseInboundModelMapper fbExpenseInboundModelMapper;

    @Autowired
    public ExpenseResource(@Value("${fb.repository.expenses}") String expenseUri, @UserRestTemplate RestTemplate restTemplate, CorrelationId correlationId, FbExpenseInboundModelMapper fbExpenseInboundModelMapper) {
        this.restTemplate = restTemplate;
        this.expenseUri = expenseUri;
        this.correlationId = correlationId;
        this.fbExpenseInboundModelMapper = fbExpenseInboundModelMapper;
    }

    @RequestMapping
    public List<Expense> expenses(@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam(value = "from", required = false) LocalDate from, @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam(value = "to", required = false) LocalDate to) {
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());
        log.info("Requesting all expenses for correlation id : {}, form: {}, to: {}, uriString: {}", correlationId.getCorrelationId(), from, to, expenseUri);
        ResponseEntity<FbExpenses> responseExpenses = restTemplate.exchange(expenseUri, HttpMethod.GET, requestEntity, FbExpenses.class);
        log.info("Requesting all expenses for correlation id : {}, form: {}, to: {}, uriString: {}", correlationId.getCorrelationId(), from, to, expenseUri);
        List<Expense> expenses = fbExpenseInboundModelMapper.toExpense(responseExpenses.getBody().getExpenses());
        return new ExpensePaidDateFilter(from, to).apply(expenses);
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected GenericError handle(Exception e) {
        log.warn("Resource ERROR", e);
        return new GenericError(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value());
    }
}
