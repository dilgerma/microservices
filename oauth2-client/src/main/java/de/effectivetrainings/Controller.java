package de.effectivetrainings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {


    private OAuth2RestTemplate restTemplate;

    @Autowired
    public Controller(OAuth2RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @RequestMapping
    public String render() {
        final HttpEntity entity = new HttpEntity(new HttpHeaders());
        final ResponseEntity exchange = restTemplate.exchange("http://localhost:8081/invoices",
                HttpMethod.GET,
                entity,
                Object.class);
        return exchange.toString();
    }

}
