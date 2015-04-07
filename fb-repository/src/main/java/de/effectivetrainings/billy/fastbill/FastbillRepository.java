package de.effectivetrainings.billy.fastbill;

import de.effectivetrainings.billy.fastbill.domain.FastbillResponse;

/**
 *
 */
public interface FastbillRepository {
    FastbillResponse request(FastbillRequestParameter parameter);
}
