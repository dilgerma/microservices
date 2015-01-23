package de.effectivetrainings.fastbill;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
public enum ServiceType {

    INVOICES("invoice.get"), EXPENSES("expense.get"), TIMES("time.get"), CUSTOMER("customer.get"), PROJECT("project.get");

    private String servicesType;

    ServiceType(String servicesType) {
        this.servicesType = servicesType;
    }

    public String getServicesType() {
        return servicesType;
    }
}
