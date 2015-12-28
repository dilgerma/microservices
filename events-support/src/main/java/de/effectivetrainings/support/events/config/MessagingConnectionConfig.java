package de.effectivetrainings.support.events.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.effectivetrainings.support.events.api.EventEmitter;
import de.effectivetrainings.support.events.api.EventListener;
import de.effectivetrainings.support.events.impl.EventContentTypeProvider;
import de.effectivetrainings.support.events.impl.EventMessageJsonConverter;
import de.effectivetrainings.support.events.impl.RabbitMqEventDispatcher;
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

    //these properties are only here to force
    //the developer to define them - otherwise
    //auto configuration kicks in.
    @Value("${spring.rabbitmq.host}")
    private String host;
    @Value("${spring.rabbitmq.port}")
    private String port;
    @Value("${spring.rabbitmq.user}")
    private String user;
    @Value("${spring.rabbitmq.user}")
    private String password;

    @Autowired
    private ConnectionFactory connectionFactory;

    @Autowired(required = false)
    private List<EventListener<?>> eventListeners;

    @Autowired
    private SimpleRabbitListenerContainerFactory simpleRabbitListenerContainerFactory;

    @Autowired
    private ResourcePatternResolver resourcePatternResolver;

    @Bean
    public AmqpAdmin amqpAdmin() {
        return new RabbitAdmin(connectionFactory);
    }

    @Bean
    public MetadataReaderFactory metadataReaderFactory() {
        return new CachingMetadataReaderFactory(resourcePatternResolver);
    }

    @Bean
    public AmqpTemplate amqpTemplate() {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setExchange(eventsExchange);
        rabbitTemplate.setMessageConverter(eventMessageJsonConverter());
        return rabbitTemplate;
    }

    @ConditionalOnMissingBean(value = EventContentTypeProvider.class)
    @Bean
    public EventContentTypeProvider eventContentTypeProvider() {
        return new EventContentTypeProvider(metadataReaderFactory(), resourcePatternResolver());
    }

    @Bean
    public ResourcePatternResolver resourcePatternResolver() {
        return new PathMatchingResourcePatternResolver(resourcePatternResolver);
    }

    @Bean
    public Queue eventsQueue() {
        return new Queue(this.eventsQueueName, true);
    }

    @Bean
    public FanoutExchange eventsExchange() {
        return new FanoutExchange(eventsExchange, true, false);
    }

    @Bean
    public Binding binding() {
        return BindingBuilder.bind(eventsQueue()).to(eventsExchange());
    }

    @Bean
    public RabbitMqEventDispatcher eventDispatcher() {
        final RabbitMqEventDispatcher rabbitMqEventDispatcher = new RabbitMqEventDispatcher(eventListeners);
        return rabbitMqEventDispatcher;
    }

    @Bean
    public EventEmitter eventEmitter() {
        return new AmqpEventEmitter(eventsExchange, amqpTemplate());
    }

    @Bean
    public EventMessageJsonConverter eventMessageJsonConverter() {
        return new EventMessageJsonConverter(eventContentTypeProvider(), new ObjectMapper());
    }

    @PostConstruct
    public void initialize() {
        simpleRabbitListenerContainerFactory.setMessageConverter(eventMessageJsonConverter());
    }
}
