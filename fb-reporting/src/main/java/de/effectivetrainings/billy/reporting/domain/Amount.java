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


package de.effectivetrainings.billy.reporting.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 01.04.14
 */
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Amount {

    @JsonProperty(value = "vat", required = true)
    private Double vatTotal = 0d;

    @JsonProperty(value = "net", required = true)
    private Double subTotal = 0d;

    @JsonProperty(value = "total", required = true)
    private Double total = 0d;

    public Amount(Double subTotal, Double vatTotal, Double total) {
        this.subTotal = subTotal;
        this.vatTotal = vatTotal;
        this.total = total;
    }


    public Amount add(Amount amountValue) {
        return new Amount(subTotal + amountValue.getSubTotal(),
                vatTotal + amountValue.getVatTotal(),
                total + amountValue.getTotal());
    }

    public Amount minus(Amount amountValue) {
        return new Amount(
                subTotal - amountValue.getSubTotal(),
                vatTotal - amountValue.getVatTotal(),
                total - amountValue.getTotal());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Amount)) return false;
        Amount amount = (Amount) o;
        return Objects.equals(vatTotal, amount.vatTotal) &&
                Objects.equals(subTotal, amount.subTotal) &&
                Objects.equals(total, amount.total);
    }

    @Override
    public int hashCode() {
        return Objects.hash(vatTotal, subTotal, total);
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Amount{");
        sb.append("subTotal=").append(subTotal);
        sb.append(", vatTotal=").append(vatTotal);
        sb.append(", total=").append(total);
        sb.append('}');
        return sb.toString();
    }
}
