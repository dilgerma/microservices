package de.effectivetrainings.template.rest;

import de.effectivetrainings.template.documents.TemplateDocument;
import de.effectivetrainings.template.documents.TemplateDocumentRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.fileUpload;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class TemplateDocumentResourceTest {

    private MockMvc mockMvc;

    @Mock
    private TemplateDocumentRepository templateDocumentRepository;

    @Before
    public void setUp() throws Exception {
        TemplateDocumentResource templateDocumentResource = new TemplateDocumentResource(templateDocumentRepository);
        mockMvc = MockMvcBuilders.standaloneSetup(templateDocumentResource).build();
    }

    @Test
    public void uploadFile() throws Exception {

        final byte[] content = "bar".getBytes();
        final String customerId = "customerId";
        final String templateName = "templateName";

        mockMvc.perform(fileUpload(TemplateDocumentResource.TEMPLATE_URI,customerId).file("file", content).param("templateName", templateName).contentType(MediaType.MULTIPART_FORM_DATA)).andDo(print()).andExpect(status().isOk());

        ArgumentCaptor<TemplateDocument> captor = ArgumentCaptor.forClass(TemplateDocument.class);
        verify(templateDocumentRepository).insert(captor.capture());

        TemplateDocument document = captor.getValue();
        assertEquals(customerId, document.getCustomerId());
        assertEquals(templateName, document.getName());
        assertArrayEquals(content, document.getDocument());
    }



}