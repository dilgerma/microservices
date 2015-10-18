package de.effectivetrainings.billy.template.documents;

import de.effectivetrainings.billy.template.Application;
import org.apache.commons.io.IOUtils;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource({"classpath:application.properties", "classpath:test.properties"})
@Ignore
public class TemplateDocumentRepositoryIntTest {

    @Autowired
    private TemplateDocumentRepository templateDocumentRepository;

    @Test
    public void contextTest() throws Exception {
        final String templateId = "templateId";

        //delete evtl. pre-existing templates
        templateDocumentRepository.delete(templateId);
        byte[] bytes = IOUtils.toByteArray(new ClassPathResource("cert.pdf").getInputStream());
        final String customerId = "customerId";

        templateDocumentRepository.insert(new TemplateDocument(templateId, customerId, bytes));
        assertTrue(templateDocumentRepository.findByCustomer(customerId).size() == 1);
        assertTrue(templateDocumentRepository.findByCustomer("invalidCustomerId").isEmpty());
        templateDocumentRepository.delete(templateId);

        fail("only manually");
    }

}
