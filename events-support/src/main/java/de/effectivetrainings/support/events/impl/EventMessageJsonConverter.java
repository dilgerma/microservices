package de.effectivetrainings.support.events.impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import de.effectivetrainings.support.events.api.EventMessageContentType;
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

    public EventMessageJsonConverter(
            EventContentTypeProvider eventContentTypeProvider,
            ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
        this.eventContentTypeProvider = eventContentTypeProvider;
    }

    @Override
    public Message toMessage(
            Object object, MessageProperties messageProperties) throws MessageConversionException {
        final EventMessageContentType annotationsByType = object
                .getClass()
                .getAnnotation(EventMessageContentType.class);
        if (annotationsByType != null) {
            messageProperties.setContentType(EventContentType.forContentType(
                    annotationsByType.source(), annotationsByType.version(), annotationsByType.type()));
        }
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
}
