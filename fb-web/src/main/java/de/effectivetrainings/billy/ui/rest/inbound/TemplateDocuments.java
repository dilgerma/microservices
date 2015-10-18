package de.effectivetrainings.billy.ui.rest.inbound;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

import java.util.List;

/**
 *
 */
@Getter
public class TemplateDocuments {

    @JsonProperty(value = "documents")
    private List<TemplateDocument> templateDocuments;

    @JsonCreator
    public TemplateDocuments(List<TemplateDocument> templateDocuments) {
        this.templateDocuments = templateDocuments;
    }
}
