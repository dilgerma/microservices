package de.effectivetrainings.billy.registration.events.registration;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerRegisteredEventTest {

    public static final String PAYLOAD = "{\"payload\" : {\"email\":\"test@test.de\", \"name\" : \"Max\"}}";

    private ObjectMapper objectMapper = new ObjectMapper();

    @SneakyThrows
    @Test
    public void deserialize() {
        final CustomerRegisteredEvent customerRegisteredEvent = objectMapper.readValue(PAYLOAD,
                CustomerRegisteredEvent.class);
        assertEquals("test@test.de", customerRegisteredEvent.getPayload().getEmail());
        assertEquals("Max", customerRegisteredEvent.getPayload().getName());
    }

}