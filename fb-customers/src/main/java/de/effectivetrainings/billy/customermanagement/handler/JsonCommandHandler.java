package de.effectivetrainings.billy.customermanagement.handler;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

/**
 * We cannot use the provided message converters (json and jackson-converter), as these rely on class-types (provided as header) to deserialize the payload). Messages are sent across service boundaries, where classes are no longer available - thus the deserialization fails with a NoClassDefFound-Exception.
 */
public class JSONCommandHandler<T> {

    private Class<T> type;

    private ObjectMapper objectMapper;

    public JSONCommandHandler(Class<T> type, ObjectMapper objectMapper) {
        this.type = type;
        this.objectMapper = objectMapper;
    }

    public T getPayload(byte[] content) {
        try {
            return objectMapper.readValue(content, type);
        } catch (IOException e) {
            throw new DeserializePayloadFailedException(e);
        }
    }


}
