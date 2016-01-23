package de.effectivetrainings.billy.fastbill;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 *
 */
public class FastbillPayloadRequestParameter<T> implements FastbillRequest {

    @JsonProperty(value = "SERVICE")
    private String serviceType;
    @JsonProperty(value = "DATA")
    private final T payload;

    public FastbillPayloadRequestParameter(ModifyServiceType serviceType, T payload) {
        this.payload = payload;
        this.serviceType = serviceType.getServicesType();
    }

    @Override
    public String toJson() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(this);
            return json;
        } catch (JsonProcessingException e) {
            throw new IllegalArgumentException("Cannot serialize parameters to JSON");
        }
    }
}
