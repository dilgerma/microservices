package de.effectivetrainings.billy.ui.facade.mock;

import de.effectivetrainings.billy.ui.domain.*;
import de.effectivetrainings.billy.ui.profiles.Profiles;
import de.effectivetrainings.billy.ui.rest.FbFacade;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.Month;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 *
 */
@Profile(Profiles.UI_DEV)
@Controller
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
public class FbMockFacade implements FbFacade {
    @Override
    public Invoices invoices() {
        Invoices invoices = new Invoices(Arrays.asList(invoice(4711L, 595d, 95d, true, new Date()), invoice(4811L, 1000d, 120d, false, date(2014, Month.APRIL.getValue())), invoice(4911L, 1200d, 160d, true, date(2014, Month.JANUARY.getValue())), invoice(5011L, 120d, 25d, false, new Date())));
        return invoices;
    }

    private Invoice invoice(long invoiceNumber, double total, double vatTotal, boolean paid, Date invoiceDate) {

        return new Invoice(invoiceNumber, new Amount(vatTotal, 500d, total), "orga",invoiceDate, paid ? new Date() : null,false);
    }

    @Override
    public Expenses expenses() {
        return null;
    }

    @Override
    public Customers customers() {
        return null;
    }

    @Override
    public void storeCustomer(Customer customer) {

    }

    @Override
    public void upload(MultipartFile upload, String templateName) throws Exception {

    }

    @Override
    public List<TemplateDocument> documents() {
        return null;
    }

    private Date date(int year, int month) {
        return Date.from(LocalDate.now().withYear(year).withMonth(month).atStartOfDay().toInstant(ZoneOffset.UTC));
    }
}
