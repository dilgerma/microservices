package de.effectivetrainings.billy.ui.facade.mock;

import de.effectivetrainings.billy.ui.config.MessagingTemplate;
import de.effectivetrainings.billy.ui.config.ServicesConfig;
import de.effectivetrainings.billy.ui.rest.inbound.*;
import de.effectivetrainings.billy.ui.rest.inbound.expense.Expenses;
import de.effectivetrainings.billy.ui.rest.FbFacade;
import de.effectivetrainings.billy.ui.rest.inbound.invoice.Invoices;
import de.effectivetrainings.support.rest.UserRestTemplate;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Slf4j
@Component
@ConditionalOnBean(value = FbFacade.class)
public class FbFacadeImpl implements FbFacade {

    private RestTemplate restTemplate;

    private ServicesConfig servicesConfig;

    private AmqpTemplate amqpTemplate;

    //TODO retrieve customer id - currently just here statically defined.
    private static final String customerId = "default";

    @Autowired
    public FbFacadeImpl(@MessagingTemplate AmqpTemplate amqpTemplate, ServicesConfig servicesConfig, @UserRestTemplate RestTemplate restTemplate) {
        this.servicesConfig = servicesConfig;
        this.restTemplate = restTemplate;
        this.amqpTemplate = amqpTemplate;
    }

    @Override
    public Invoices invoices() {
        log.info("Requesting all valid invoices");
        return request(servicesConfig.getInvoiceBackendUri(), Invoices.class);
    }

    @Override
    public Expenses expenses() {
        log.info("Requesting all expenses");
        return request(servicesConfig.getExpenseBackendURI(), Expenses.class);
    }

    @Override
    @RequestMapping(value = "customers")
    public Customers customers() {
        log.info("Requesting all customers");
        return request(servicesConfig.getCustomersBackendURI(), Customers.class);
    }

    @Override
    public void storeCustomer(@RequestBody Customer customer) {
        amqpTemplate.convertAndSend("exchange.handler.customer", "queue.commands.customer", customer);
    }

    @Override
    public void upload(MultipartFile upload, String templateName) throws Exception {
        log.info("Receiving template request : {}, size: {}", templateName, upload.getSize());


        MultiValueMap<String, Object> parts = new LinkedMultiValueMap<String, Object>();
        parts.add("file", new ByteArrayResource(upload.getBytes()) {
            @Override
            public String getFilename() {
                return templateName;
            }
        });
        parts.add("templateName", templateName);

        Map<String, String> uriVars = new HashMap<>();
        uriVars.put("customerId", customerId);
        restTemplate.postForLocation(servicesConfig.getTemplateServiceURI(), parts, uriVars);
    }

    @Override
    public List<TemplateDocument> documents() {
        log.info("loading template-documents for {}", customerId);

        Map<String, String> uriVars = new HashMap<>();
        uriVars.put("customerId", customerId);
        return restTemplate.getForEntity(servicesConfig.getTemplateServiceURI(), TemplateDocuments.class, uriVars).getBody().getTemplateDocuments();
    }

    private <T> T request(String uri, Class<T> target) {
        HttpEntity requestEntity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<T> expenseResponse = restTemplate.exchange(uri, HttpMethod.GET, requestEntity, target);
        return expenseResponse.getBody();
    }
}
