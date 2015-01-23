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

import de.effectivetrainings.fastbill.FastbillRequestParameter;
import de.effectivetrainings.fastbill.ServiceType;
import de.effectivetrainings.fastbill.json.Filter;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
public class ServiceTypeTest {

    @Test
    public void invoiceServiceTypeWithFilter() {
        ServiceType type = ServiceType.EXPENSES;
        Filter filter = new Filter(Filter.INVOICE_NUMBER, "12");
        FastbillRequestParameter parameter = new FastbillRequestParameter(type, -1, filter);

        assertEquals("{\"service\":\"" + type.getServicesType() +
            "\",\"Limit\":-1,\"Filter\":{\""
            + Filter.INVOICE_NUMBER + "\":\""
            + filter.getFilterValue()
            + "\"}}", parameter.toJson());
    }
}
