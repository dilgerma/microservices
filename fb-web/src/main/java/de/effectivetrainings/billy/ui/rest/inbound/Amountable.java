package de.effectivetrainings.billy.ui.rest.inbound;

import de.effectivetrainings.billy.ui.rest.inbound.invoice.Amount;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 02.04.14
 */
public interface Amountable {

   public Amount getAmountValue();
}
