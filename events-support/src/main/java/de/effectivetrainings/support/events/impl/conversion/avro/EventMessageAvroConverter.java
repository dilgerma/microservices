package de.effectivetrainings.support.events.impl.conversion.avro;

import org.apache.avro.generic.GenericRecord;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageProperties;
import org.springframework.amqp.support.converter.MessageConversionException;
import org.springframework.amqp.support.converter.MessageConverter;

import java.util.Objects;

public class EventMessageAvroConverter implements MessageConverter {

    private final AvroSerializer avroSerializer;

    public EventMessageAvroConverter(AvroSerializer avroSerializer) {
        this.avroSerializer = Objects.requireNonNull(avroSerializer);
    }

    @Override
    public Message toMessage(
            Object object, MessageProperties messageProperties) throws MessageConversionException {
        if (!(object instanceof GenericRecord)) {
            throw new InvalidPayloadException(
                    "Invalid Payload Type. Avro Serialization requires Type GenericRecord, got " + object.getClass());
        }
        final GenericRecord genericRecord = (GenericRecord) object;
        byte[] content = avroSerializer.to(genericRecord);
        messageProperties.setContentType(genericRecord.getSchema().getFullName());
        return new Message(content, messageProperties);
    }

    @Override
    public Object fromMessage(Message message) throws MessageConversionException {
        return avroSerializer.from(message.getBody());
    }
}
