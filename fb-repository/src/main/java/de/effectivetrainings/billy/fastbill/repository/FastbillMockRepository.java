package de.effectivetrainings.billy.fastbill.repository;

import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillRequestParameter;
import de.effectivetrainings.billy.fastbill.ServiceType;
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
    public FastbillResponse request(FastbillRequestParameter parameter) {
        if (ServiceType.INVOICES.getServicesType().equals(parameter.getServiceType())) {
            return retrieveMockedInvoices();
        } else if (ServiceType.EXPENSES.getServicesType().equals(parameter.getServiceType())) {
            return retrieveMockedExpenses();
        } else if (ServiceType.CUSTOMER.getServicesType().equals(parameter.getServiceType())) {
            return retrieveMockedCustomers();
        }
        throw new IllegalStateException(parameter.getServiceType() + " currently not supported by mock");
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

        Invoice invoice = new Invoice(4711L, 4811L, new Amount(200d, 2000d, 2200d), "Heureka Cloud Apps", new Date(), new Date(), "paid cheque", -1);
        invoiceList.add(invoice);

        fastbillResponse.getResponse().setInvoices(invoiceList);
        return fastbillResponse;
    }


}