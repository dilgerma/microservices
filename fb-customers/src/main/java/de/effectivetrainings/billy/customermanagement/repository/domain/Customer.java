package de.effectivetrainings.billy.customermanagement.repository.domain;

import lombok.*;

/**
 *
 */
@Getter
@NoArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode
public class Customer {

    public static final String AGGREGATE_NAME = "customer.customers";

    @NonNull
    private String customerId;
    @NonNull
    private String customerNumber;
    @NonNull
    private String organization;
}
