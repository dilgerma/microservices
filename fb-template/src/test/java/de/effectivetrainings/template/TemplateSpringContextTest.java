package de.effectivetrainings.template;

import de.effectivetrainings.template.documents.TemplateDocumentRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import static org.junit.Assert.assertNotNull;

/**
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = Application.class)
@WebAppConfiguration
@TestPropertySource({"classpath:application.properties", "classpath:test.properties"})
public class TemplateSpringContextTest {

    @Autowired
    private TemplateDocumentRepository templateDocumentRepository;

    @Test
    public void contextTest() {
        //nothing to do, just start context and verify.
        assertNotNull(templateDocumentRepository);
    }
}
