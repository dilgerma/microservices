package de.effectivetrainings.fastbill.repository;

import de.effectivetrainings.fastbill.FastbillRepository;
import de.effectivetrainings.fastbill.FastbillRequestParameter;
import de.effectivetrainings.fastbill.ServiceType;
import de.effectivetrainings.fastbill.config.Profiles;
import de.effectivetrainings.fastbill.json.Amount;
import de.effectivetrainings.fastbill.json.FastbillResponse;
import de.effectivetrainings.fastbill.json.Invoice;
import de.effectivetrainings.fastbill.json.Response;
import org.springframework.context.annotation.Profile;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 */
@Profile(Profiles.MOCK)
public class FastbillMockRepository implements FastbillRepository {
    @Override
    public FastbillResponse request(FastbillRequestParameter parameter) {
        if(ServiceType.INVOICES.getServicesType().equals(parameter.getServiceType())) {
            return retrieveMockedInvoices();
        }
        throw new IllegalStateException(parameter.getServiceType() + " currently not supported by mock");
    }

    private FastbillResponse retrieveMockedInvoices() {
        FastbillResponse fastbillResponse = new FastbillResponse();
        fastbillResponse.setResponse(new Response());

        List<Invoice> invoiceList = new ArrayList<>();

        Invoice invoice = new Invoice(4711L, 4811L, new Amount(200d, 2000d, 2200d), "Heureka Cloud Apps", new Date(), new Date(), "paid cheque", -1);
        invoiceList.add(invoice);

        fastbillResponse.getResponse().setInvoices(invoiceList);
        return fastbillResponse;
    }


}
