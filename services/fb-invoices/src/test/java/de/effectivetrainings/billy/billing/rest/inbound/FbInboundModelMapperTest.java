package de.effectivetrainings.billy.billing.rest.inbound;

import de.effectivetrainings.billy.billing.domain.Invoice;
import de.effectivetrainings.billy.billing.rest.inbound.model.FbAmount;
import de.effectivetrainings.billy.billing.rest.inbound.model.FbInvoice;
import org.junit.Before;
import org.junit.Test;

import java.util.Date;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 *
 */
public class FbInboundModelMapperTest  {

    public static final Double VAT = 2d;
    public static final Double NET = 3d;
    public static final Double TOTAL = 4d;
    public static final Long INVOICE_ID = 1L;
    public static final String INVOICE_NUMBER = "1";
    private FbInboundModelMapper inboundModelMapper;



    @Before
    public void setUp() throws Exception {
        this.inboundModelMapper = new FbInboundModelMapper();
    }

    @Test
    public void testMapInvoicePaid() throws Exception {
        FbInvoice fbInvoice = testFbInvoice(true);

        Invoice invoice = inboundModelMapper.toInvoice(fbInvoice);
        assertTrue(invoice.isPaid());
        assertEquals(VAT, invoice.getAmountValue().getVatTotal());
        assertEquals(NET, invoice.getAmountValue().getSubTotal());
        assertEquals(TOTAL, invoice.getAmountValue().getTotal());
    }

    @Test
    public void testInvoiceUnpaid() throws Exception {
        assertFalse(inboundModelMapper.toInvoice(testFbInvoice(false)).isPaid());
    }

    private FbInvoice testFbInvoice(boolean paid) {
        FbAmount fbAmount = new FbAmount(VAT, NET, TOTAL);
        return new FbInvoice(INVOICE_ID, INVOICE_NUMBER, fbAmount, "orga", new Date(), paid ? new Date() : null, "", 1);
    }
}