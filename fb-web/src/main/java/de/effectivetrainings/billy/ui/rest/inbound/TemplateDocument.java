package de.effectivetrainings.billy.ui.rest.inbound;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

/**
 *
 */
@Getter
public class TemplateDocument {

    @JsonProperty(value = "document")
    private byte[] content;
    @JsonProperty(value = "customerId")
    private String customerId;
    @JsonProperty(value = "name")
    private String name;

    @JsonCreator
    public TemplateDocument(@JsonProperty(value = "customerId")
                            String customerId, @JsonProperty(value = "name")
                            String name, @JsonProperty(value = "document")
                            byte[] content) {
        this.content = content;
        this.customerId = customerId;
        this.name = name;
    }
}
