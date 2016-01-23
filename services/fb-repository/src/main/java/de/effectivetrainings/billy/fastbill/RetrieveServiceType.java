package de.effectivetrainings.billy.fastbill;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
public enum RetrieveServiceType {

    INVOICES("invoice.get"), EXPENSES("expense.get"), TIMES("time.get"), CUSTOMER("customer.get"), PROJECT("project.get"), CUSTOMER_CREATE("customer.create");

    private String servicesType;

    RetrieveServiceType(String servicesType) {
        this.servicesType = servicesType;
    }

    public String getServicesType() {
        return servicesType;
    }
}
