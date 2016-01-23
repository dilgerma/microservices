package de.effectivetrainings.billy.fastbill;

/**
 * Services Types that modify data.
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
public enum ModifyServiceType {

    CUSTOMER_CREATE("customer.create"),
    CUSTOMER_DELETE("customer.delete");

    private String servicesType;

    ModifyServiceType(String servicesType) {
        this.servicesType = servicesType;
    }

    public String getServicesType() {
        return servicesType;
    }
}
