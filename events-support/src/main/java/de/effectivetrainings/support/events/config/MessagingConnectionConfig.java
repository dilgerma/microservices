package de.effectivetrainings.support.events.config;

import de.effectivetrainings.support.events.api.EventListener;
import de.effectivetrainings.support.events.impl.RabbitMqEventDispatcher;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

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
    private String fanoutExchangeName;

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

    @Bean
    public AmqpAdmin amqpAdmin() {
        return new RabbitAdmin(connectionFactory);
    }


    @Bean
    public AmqpTemplate rabbitTemplate() {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setExchange(fanoutExchangeName);
        rabbitTemplate.setMessageConverter(new Jackson2JsonMessageConverter());
        return rabbitTemplate;
    }

    @Bean
    public Queue eventsQueue() {
        return new Queue(this.eventsQueueName, true);
    }

    @Bean
    public Exchange eventsExchange() {
        return new FanoutExchange(fanoutExchangeName, true, false);
    }

    @Bean
    public RabbitMqEventDispatcher eventDispatcher() {
        final RabbitMqEventDispatcher rabbitMqEventDispatcher = new RabbitMqEventDispatcher(eventListeners);
        rabbitMqEventDispatcher.setConnectionFactory(connectionFactory);
        rabbitMqEventDispatcher.setQueueNames(eventsQueueName);
        return rabbitMqEventDispatcher;
    }
}
