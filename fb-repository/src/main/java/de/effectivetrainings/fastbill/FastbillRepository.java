package de.effectivetrainings.fastbill;

import de.effectivetrainings.billing.domain.FastbillResponse;

/**
 *
 */
public interface FastbillRepository {
    FastbillResponse request(FastbillRequestParameter parameter);
}
