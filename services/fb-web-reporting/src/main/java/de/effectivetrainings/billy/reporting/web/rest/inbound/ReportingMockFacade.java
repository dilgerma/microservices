package de.effectivetrainings.billy.reporting.web.rest.inbound;

import de.effectivetrainings.billy.reporting.web.rest.inbound.model.AmountValue;
import de.effectivetrainings.billy.reporting.web.rest.inbound.model.ReportItemValue;
import de.effectivetrainings.billy.reporting.web.rest.inbound.model.ReportValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class ReportingMockFacade {

    @RequestMapping("/report")
      public ReportValue reportRequest() {
        ReportValue reportValue = new ReportValue(new AmountValue(23d, 24d, 25d), Arrays.asList(new ReportItemValue("4711", new AmountValue(50d, 51d, 52d), "orga test")), Arrays.asList(new ReportItemValue("4711", new AmountValue(50d, 51d, 52d), "expense orga")));
        return reportValue;
    }
}
