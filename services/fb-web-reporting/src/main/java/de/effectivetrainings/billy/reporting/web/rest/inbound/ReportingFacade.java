package de.effectivetrainings.billy.reporting.web.rest.inbound;

import de.effectivetrainings.billy.reporting.web.rest.inbound.model.ReportValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportingFacade {

    private ReportRequest reportRequest;

    public ReportingFacade(ReportRequest reportRequest) {
        this.reportRequest = reportRequest;
    }

    @RequestMapping("/report")
    public ReportValue reportRequest() {
        return reportRequest.request();
    }
}
