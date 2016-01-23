package de.effectivetrainings.billy.customermanagement.config;

import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitAdmin;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


/**
 *
 */
@Configuration
public class MessaginConnectionConfig {


    @Bean
    public ConnectionFactory connectionFactory(@Value("${rabbit.uri}") String uri, @Value("${rabbit.port}") int port) {
        CachingConnectionFactory connectionFactory =
                new CachingConnectionFactory(uri, port);
        return connectionFactory;
    }

    @Bean
    public AmqpAdmin amqpAdmin(ConnectionFactory connectionFactory) {
        return new RabbitAdmin(connectionFactory);
    }

    @Bean(name = "messagingTemplate")
    @MessagingTemplate
    public AmqpTemplate template(ConnectionFactory connectionFactory, @DefaultMessageConverterQualifier MessageConverter messageConverter) {
        RabbitTemplate amqpTemplate = new RabbitTemplate(connectionFactory);
        amqpTemplate.setMessageConverter(messageConverter);
        return amqpTemplate;
    }

    @Bean
    @DefaultMessageConverterQualifier
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }
}
