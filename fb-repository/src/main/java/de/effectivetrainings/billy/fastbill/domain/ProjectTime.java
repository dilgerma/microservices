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

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 *
 * Not a Fastbill Object but aggregation of customer and project times
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 24.04.14
 */
@Getter
@Setter
@NoArgsConstructor
public class ProjectTime {

    @JsonProperty(value = "ORGANIZATION")
    private String organization;

    @JsonProperty(value = "BILLED_MINUTES")
    private Long billedMinutes;

    @JsonProperty(value = "BILLED_HOURS")
    private Double billedHours;

    @JsonProperty(value = "PROJECT_NAME")
    private String projectName;

    @JsonProperty(value = "PROJECT_ID")
    private String projectId;

    @JsonProperty(value = "BOOKINGS")
    private List<Time> bookings;

    @JsonProperty(value = "HOUR_RATE")
    private Double hourRate = -1d;

    @JsonProperty(value = "COMPLETE_INCOME")
    private Double completeIncome;

    public void setBilledMinutes(Long billedMinutes) {
        this.billedMinutes = billedMinutes;
        if(billedMinutes != null) {
            billedHours = (billedMinutes / 60d);
        }
    }

    public Double getCompleteIncome() {
        if (this.bookings == null) {
            return 0d;
        }
        Double billableMinutes = this.bookings.stream().mapToDouble(Time::getBillableMinutes).sum();
        if(billableMinutes == null)
            return 0d;
        return (billableMinutes / 60) * hourRate;
    }
}
