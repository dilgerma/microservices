package de.effectivetrainings.eventstore;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

/**
 * TODO copied from customer service - extract to 3rd party
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
            throw new IllegalArgumentException(e);
        }
    }


}
