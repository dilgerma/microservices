package de.effectivetrainings.support.events.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.effectivetrainings.support.events.api.ApiVersion;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.support.converter.MessageConversionException;
import org.springframework.amqp.support.converter.MessageConverter;

import java.io.IOException;

@Slf4j
public class EventMessageJsonConverter implements MessageConverter {

    private ObjectMapper objectMapper;
    private EventContentTypeProvider eventContentTypeProvider;
    private String eventsSource;

    public EventMessageJsonConverter(
            EventContentTypeProvider eventContentTypeProvider,
            ObjectMapper objectMapper,
            String eventsSource) {
        this.objectMapper = objectMapper;
        this.eventContentTypeProvider = eventContentTypeProvider;
        this.eventsSource = eventsSource;
    }

    @Override
    public Message toMessage(
            Object object, MessageProperties messageProperties) throws MessageConversionException {

        final ApiVersion versionAnnotation = object.getClass().getAnnotation(ApiVersion.class);
        final int version = version(versionAnnotation);
        messageProperties.setContentType(EventContentType.forContentType(
                eventsSource, version, object.getClass()));
        messageProperties.setHeader("x-evt-msg-version", version);
        messageProperties.setHeader("x-evt-origin", eventsSource);
        messageProperties.setAppId(eventsSource);
        try {
            byte[] raw = objectMapper.writeValueAsBytes(object);
            return new Message(raw, messageProperties);
        } catch (JsonProcessingException e) {
            throw new MessageConversionException("error converting message", e);
        }
    }

    @Override
    public Object fromMessage(Message message) throws MessageConversionException {
        String contentType = message.getMessageProperties().getContentType();
        Class<?> eventClass = eventContentTypeProvider.findTypeByContentType(contentType);
        try {
            if (eventClass != null) {
                return objectMapper.readValue(message.getBody(), eventClass);
            } else {
                log.warn("Cannot process Message : {}. No Matching content type found. Available content types : {}",
                        eventContentTypeProvider.availableContentTypes());
                throw new MessageConversionException("Cannot read message - no valid content type" +
                        eventContentTypeProvider.availableContentTypes());
            }
        } catch (IOException e) {
            throw new MessageConversionException("Cannot read message", e);
        }
    }

    private int version(ApiVersion version) {
        return version != null ? version.version() : 1;
    }
}
