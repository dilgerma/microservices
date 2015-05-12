package de.effectivetrainings.billy.ui.rest;

import de.effectivetrainings.billy.ui.domain.*;
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
