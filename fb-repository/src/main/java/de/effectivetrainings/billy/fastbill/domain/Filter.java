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


package de.effectivetrainings.billy.fastbill.domain;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@NoArgsConstructor
public class Filter {

    private static final SimpleDateFormat SIMPLE_DATE_FORMAT =
        new SimpleDateFormat("yyyy-MM-dd");

    /**
     * default filter that does nothing.
     */
    public static final Filter NONE = new Filter();

    /**
     * filter to parse expenses by their id.
     */
    public static final String ID = "INVOICE_ID";
    public static final String INVOICE_NUMBER = "INVOICE_NUMBER";
    public static final String MONTH = "MONTH";
    public static final String YEAR = "YEAR";
    public static final String CUSTOMER_ID = "CUSTOMER_ID";
    public static final String CUSTOMER_SEARCH_TERM = "TERM";
    public static final String PROJECT_ID = "PROJECT_ID";
    public static final String START_DATE = "START_DATE";
    public static final String END_DATE = "END_DATE";

    private String filterValue = "";
    private String filterName = "";
    private Date dateValue;

    public Filter(String filterName, String filterValue) {
        this.filterName = filterName;
        this.filterValue = filterValue;
    }

    public Filter(String filterName, Date date) {
        this.filterName = filterName;
        this.dateValue = date;
    }

    @JsonIgnore
    public String getFilterName() {
        return filterName;
    }
    @JsonIgnore
    public String getFilterValue() {
        return dateValue == null ? filterValue : SIMPLE_DATE_FORMAT.format(dateValue);
    }

    @JsonAnyGetter
    protected Map<String, String> toJson() {
        Map<String, String> map = new HashMap<String, String>();
        map.put(filterName, filterValue);
        return map;
    }

    public boolean isValid() {
        return !this.equals(Filter.NONE) && !StringUtils.isEmpty(this.filterName)
            && (!StringUtils.isEmpty(filterValue) || !StringUtils.isEmpty(dateValue));
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Filter filter = (Filter) o;

        if (filterName != null ? !filterName.equals(filter.filterName) : filter.filterName != null) return false;
        if (filterValue != null ? !filterValue.equals(filter.filterValue) : filter.filterValue != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = filterValue != null ? filterValue.hashCode() : 0;
        result = 31 * result + (filterName != null ? filterName.hashCode() : 0);
        return result;
    }
}
