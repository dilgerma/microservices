package de.effectivetrainings.support.events.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.effectivetrainings.support.events.api.EventEmitter;
import de.effectivetrainings.support.events.api.EventHandler;
import de.effectivetrainings.support.events.api.EventsExchangeQualifier;
import de.effectivetrainings.support.events.impl.conversion.json.EventContentTypeProvider;
import de.effectivetrainings.support.events.impl.conversion.avro.AvroSerializer;
import de.effectivetrainings.support.events.impl.conversion.avro.EventMessageAvroConverter;
import de.effectivetrainings.support.events.impl.conversion.json.EventMessageJsonConverter;
import de.effectivetrainings.support.events.impl.AmqpEventDispatcher;
import de.effectivetrainings.support.events.impl.AmqpEventEmitter;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReaderFactory;

import javax.annotation.PostConstruct;
import java.util.List;

/**
 *
 */
@Configuration
public class MessagingConnectionConfig {

    @Value("${events.queue:eventsQ}")
    private String eventsQueueName;

    @Value("${events.exchangeName:eventsXchg}")
    private String eventsExchange;

    @Value("${events.source.name}")
    private String eventsSource;

    //these properties are only here to force
    //the developer to define them - otherwise
    //auto configuration kicks in.
    @Value("${spring.rabbitmq.host}")
    private String host;
    @Value("${spring.rabbitmq.port:5672}")
    private String port;
    @Value("${spring.rabbitmq.user}")
    private String user;
    @Value("${spring.rabbitmq.user}")
    private String password;

    @Autowired
    private ConnectionFactory connectionFactory;

    @Autowired(required = false)
    private List<EventHandler> eventHandlers;

    @Autowired
    private SimpleRabbitListenerContainerFactory simpleRabbitListenerContainerFactory;

    @Bean
    public AmqpAdmin amqpAdmin() {
        return new RabbitAdmin(connectionFactory);
    }

    @Bean
    public MetadataReaderFactory metadataReaderFactory() {
        return new CachingMetadataReaderFactory(eventsResourcePatternResolver());
    }

    @Bean
    public AmqpTemplate amqpTemplate() {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setExchange(eventsExchange);
        rabbitTemplate.setMessageConverter(eventMessageAvroConverter());
        return rabbitTemplate;
    }


    @ConditionalOnMissingBean(value = EventContentTypeProvider.class)
    @Bean
    public EventContentTypeProvider eventContentTypeProvider() {
        return new EventContentTypeProvider(metadataReaderFactory(), eventsResourcePatternResolver());
    }

    @Bean
    public ResourcePatternResolver eventsResourcePatternResolver() {
        return new PathMatchingResourcePatternResolver();
    }


    @EventsExchangeQualifier
    @Bean
    public FanoutExchange eventsExchange() {
        return new FanoutExchange(eventsExchange, true, false);
    }


    @Bean
    public AmqpEventDispatcher eventDispatcher() {
        final AmqpEventDispatcher amqpEventDispatcher = new AmqpEventDispatcher(eventHandlers);
        return amqpEventDispatcher;
    }

    @Bean
    public EventEmitter eventEmitter() {
        return new AmqpEventEmitter(eventsExchange, amqpTemplate());
    }

    @Bean
    public EventMessageJsonConverter eventMessageJsonConverter() {
        return new EventMessageJsonConverter(eventContentTypeProvider(), new ObjectMapper(), eventsSource);
    }

    @Bean
    public AvroSerializer avroSerializer() {
        return new AvroSerializer();
    }

    @Bean
    public EventMessageAvroConverter eventMessageAvroConverter() {
        return new EventMessageAvroConverter(avroSerializer());
    }

    @PostConstruct
    public void initialize() {
        simpleRabbitListenerContainerFactory.setMessageConverter(eventMessageAvroConverter());
    }
}
