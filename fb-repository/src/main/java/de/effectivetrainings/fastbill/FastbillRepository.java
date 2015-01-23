package de.effectivetrainings.fastbill;

import de.effectivetrainings.fastbill.json.FastbillResponse;

/**
 *
 */
public interface FastbillRepository {
    FastbillResponse request(FastbillRequestParameter parameter);
}
