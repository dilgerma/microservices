package de.effectivetrainings.billy.template.documents;

import lombok.Getter;
import org.springframework.data.annotation.Id;

/**
 *
 */
@org.springframework.data.mongodb.core.mapping.Document(collection = "templates")
@Getter
public class TemplateDocument {

    @Id
    private String name;
    private String customerId;
    private byte[] document;

    public TemplateDocument(String name, String customerId, byte[] document) {
        this.name = name;
        this.customerId = customerId;
        this.document = document;
    }
}
