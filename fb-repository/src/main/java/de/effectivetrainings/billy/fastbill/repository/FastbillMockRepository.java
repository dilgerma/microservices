package de.effectivetrainings.billy.fastbill.repository;

import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillRequest;
import de.effectivetrainings.billy.fastbill.FastbillRequestParameter;
import de.effectivetrainings.billy.fastbill.RetrieveServiceType;
import de.effectivetrainings.billy.fastbill.config.Profiles;
import de.effectivetrainings.billy.fastbill.domain.*;
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
    public FastbillResponse request(FastbillRequest parameter) {
        if (parameter instanceof FastbillRequestParameter) {
            FastbillRequestParameter fastbillRequestParameter = (FastbillRequestParameter) parameter;
            if (RetrieveServiceType.INVOICES.getServicesType().equals(fastbillRequestParameter.getServiceType())) {
                return retrieveMockedInvoices();
            } else if (RetrieveServiceType.EXPENSES.getServicesType().equals(fastbillRequestParameter.getServiceType())) {
                return retrieveMockedExpenses();
            } else if (RetrieveServiceType.CUSTOMER.getServicesType().equals(fastbillRequestParameter.getServiceType())) {
                return retrieveMockedCustomers();
            }
            throw new IllegalStateException(fastbillRequestParameter.getServiceType() + " currently not supported by mock");
        } else {
            //ignore payload requests
        }
        throw new IllegalStateException("Invalid parameter type : " + parameter.getClass());
    }

    private FastbillResponse retrieveMockedCustomers() {
        FastbillResponse fastbillResponse = new FastbillResponse();
        fastbillResponse.setResponse(new Response());

        List<Customer> customerList = new ArrayList<>();

        Customer customer = new Customer("4711", "1111", "effective trainings & consulting");
        customerList.add(customer);

        fastbillResponse.getResponse().setCustomers(customerList);
        return fastbillResponse;
    }

    private FastbillResponse retrieveMockedExpenses() {
        FastbillResponse fastbillResponse = new FastbillResponse();
        fastbillResponse.setResponse(new Response());

        List<Expense> expenseList = new ArrayList<>();

        Expense expense = new Expense("effective trainings", "4711", new Date(), new Date(), new Amount(25.0, 5.0, 30.0), "comment");
        expenseList.add(expense);

        fastbillResponse.getResponse().setExpenses(expenseList);
        return fastbillResponse;
    }

    private FastbillResponse retrieveMockedInvoices() {
        FastbillResponse fastbillResponse = new FastbillResponse();
        fastbillResponse.setResponse(new Response());

        List<Invoice> invoiceList = new ArrayList<>();

        Invoice invoice = new Invoice(4711L, "4811", new Amount(200d, 2000d, 2200d), "" +
                "Heureka Cloud Apps", new Date(), new Date(), "paid cheque", -1);
        invoiceList.add(invoice);

        fastbillResponse.getResponse().setInvoices(invoiceList);
        return fastbillResponse;
    }


}
