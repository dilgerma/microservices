package de.effectivetrainings.billy.reporting.web.rest.inbound;

import de.effectivetrainings.billy.reporting.web.rest.inbound.model.ReportValue;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

public class ReportRequest {

    private RestTemplate restTemplate;
    private URI reportingURI;

    public ReportRequest(URI reportingURI, RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
        this.reportingURI = reportingURI;
    }

    public ReportValue request() {
        return restTemplate.getForEntity(reportingURI, ReportValue.class).getBody();
    }
}
