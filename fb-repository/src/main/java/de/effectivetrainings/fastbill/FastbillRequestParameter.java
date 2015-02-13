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


package de.effectivetrainings.fastbill;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Preconditions;
import de.effectivetrainings.billing.domain.Filter;
import de.effectivetrainings.billing.domain.Filters;
import lombok.Getter;

import java.util.Arrays;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 30.03.14
 */
@JsonPropertyOrder(value = {"serviceType", "limit", "filterList"})
@Getter
public class FastbillRequestParameter {

    @JsonProperty(required = true, value = "service")
    private final String serviceType;

    @JsonProperty(value = "Filter")
    private final Filters filters;

    @JsonProperty(required = true, value = "Limit")
    private final int limit;

    public FastbillRequestParameter(ServiceType serviceType, int limit, Filter... filters) {

        Preconditions.checkArgument(filters.length != 0);

        this.serviceType = serviceType.getServicesType();
        this.filters = new Filters(Arrays.asList(filters));
        this.limit = limit;
    }

    public String toJson() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(this);
            return json;
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException("Cannot serialize parameters to JSON");
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FastbillRequestParameter parameter = (FastbillRequestParameter) o;

        if (limit != parameter.limit) return false;
        if (filters != null ? !filters.equals(parameter.filters) : parameter.filters != null) return false;
        if (serviceType != null ? !serviceType.equals(parameter.serviceType) : parameter.serviceType != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = serviceType != null ? serviceType.hashCode() : 0;
        result = 31 * result + (filters != null ? filters.hashCode() : 0);
        result = 31 * result + limit;
        return result;
    }
}
