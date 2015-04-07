package de.effectivetrainings.billy.ui.domain;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import java.util.Arrays;

import static org.junit.Assert.assertEquals;

public class TemplateDocumentsTest {

    /**
     * template service returns a list of template documents
     */
    @Test
    public void deserializeFromListOfTemplateDocuments() throws Exception{
        ObjectMapper objectMapper = new ObjectMapper();

        TemplateDocument templateDocument = new TemplateDocument("cutomerId", "name", "test".getBytes());
        TemplateDocument templateDocument2 = new TemplateDocument("cutomerId2", "name2", "test2".getBytes());
        String listOfDocumentsAsJson = objectMapper.writeValueAsString(Arrays.asList(templateDocument, templateDocument2));

        TemplateDocuments documents = objectMapper.readValue(listOfDocumentsAsJson, TemplateDocuments.class);
        assertEquals(2, documents.getTemplateDocuments().size());
    }
}