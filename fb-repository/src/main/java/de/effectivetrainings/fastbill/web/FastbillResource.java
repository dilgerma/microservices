package de.effectivetrainings.fastbill.web;

import de.effectivetrainings.fastbill.json.Invoice;

import java.util.List;

/**
 *
 */
public interface FastbillResource {

    public List<Invoice> findInvoices();

    public List<Invoice> findAllInvoices();

}
