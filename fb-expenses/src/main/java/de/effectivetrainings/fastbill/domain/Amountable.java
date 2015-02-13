package de.effectivetrainings.fastbill.json;

import de.effectivetrainings.fastbill.domain.Amount;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 02.04.14
 */
public interface Amountable {

   public Amount getAmountValue();
}
