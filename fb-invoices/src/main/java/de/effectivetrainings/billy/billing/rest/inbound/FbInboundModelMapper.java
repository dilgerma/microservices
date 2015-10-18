package de.effectivetrainings.billy.billing.rest.inbound;

import de.effectivetrainings.billy.billing.domain.Amount;
import de.effectivetrainings.billy.billing.domain.Invoice;
import de.effectivetrainings.billy.billing.domain.Invoices;
import de.effectivetrainings.billy.billing.rest.inbound.model.FbAmount;
import de.effectivetrainings.billy.billing.rest.inbound.model.FbInvoice;
import de.effectivetrainings.billy.billing.rest.inbound.model.FbInvoices;

import java.util.stream.Collectors;

/**
 * Maps the inbound models to the domain model of the invoice service.
 */
public class FbInboundModelMapper {

    public Invoices toInvoices(FbInvoices fbInvoices) {
        return new Invoices(fbInvoices.getInvoices().stream().map(this::toInvoice).collect(Collectors.toList()));
    }

    public Invoice toInvoice(FbInvoice fbInvoice) {
        return new Invoice(fbInvoice.getInvoiceNumber(), mapAmount(fbInvoice.getAmountValue()), fbInvoice.getOrganization(), fbInvoice.getInvoiceDate(), fbInvoice.getPaidDate(), fbInvoice.getCancelled() == 1);
    }

    private Amount mapAmount(FbAmount amountValue) {
        return new Amount(amountValue.getVatTotal(), amountValue.getSubTotal(), amountValue.getTotal());
    }
}
