package de.effectivetrainings.billy.ui.rest;

import de.effectivetrainings.billy.ui.rest.inbound.*;
import de.effectivetrainings.billy.ui.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.ui.rest.inbound.invoice.Invoices;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 *
 */
public interface FbFacade {
    Invoices invoices();

    Expenses expenses();

    Customers customers();

    void storeCustomer(Customer customer);

    void upload(MultipartFile upload, String templateName) throws Exception;

    List<TemplateDocument> documents();

}
