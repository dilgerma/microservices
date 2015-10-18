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


package de.effectivetrainings.billy.ui.rest;


import de.effectivetrainings.billy.ui.rest.inbound.*;
import de.effectivetrainings.billy.ui.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.ui.rest.inbound.invoice.Invoices;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
//TODO rename - prod facade is a pretty bad name
public class FbFacadeController implements FbFacade {

   private FbFacade fbFacade;
    //TODO retrieve customer id - currently just here statically defined.
    private static final String customerId = "default";

    @Autowired
    public FbFacadeController(FbFacade fbFacade) {
        this.fbFacade = fbFacade;
    }

    @Override
    @RequestMapping(value = "invoices")
    public Invoices invoices() {
      return fbFacade.invoices();
    }

    @Override
    @RequestMapping(value = "expenses")
    public Expenses expenses() {
       return fbFacade.expenses();
    }

    @Override
    @RequestMapping(value = "customers")
    public Customers customers() {
        return fbFacade.customers();
    }

    @Override
    @RequestMapping(value = "customer", method = RequestMethod.POST)
    public void storeCustomer(@RequestBody Customer customer) {
        fbFacade.storeCustomer(customer);
    }

    @Override
    @RequestMapping(value = "templates", method = RequestMethod.POST)
    public void upload(@RequestPart("file") MultipartFile upload, @RequestParam(value = "templateName") String templateName) throws Exception {
       fbFacade.upload(upload, templateName);
    }

    @Override
    @RequestMapping(value = "templates", method = RequestMethod.GET)
    public List<TemplateDocument> documents() {
       return fbFacade.documents();
    }

    /**
     * TODO handle client exceptions correctly...
     *
     * @param ex
     */
    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public void handle(Exception ex) {
        log.error("Error in UI", ex);
    }

}
