package de.effectivetrainings.billy.customermanagement.config;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.retry.interceptor.RetryInterceptorBuilder;

import java.util.HashMap;
import java.util.Map;

/**
 *
 */
@Configuration
public class RoutingConfig {

    @Bean(name = "exchange.customer")
    public DirectExchange customerExchange() {
        return new DirectExchange(MessagingConstants.CUSTOMER_EXCHANGE);
    }

    @Bean(name = "exchange.fb.customer")
    public DirectExchange fbCustomerExchange() {
        return new DirectExchange(MessagingConstants.CUSTOMER_FB_EXCHANGE);
    }

    @Bean(name = "commands.customer")
    public Queue customerCommandQueue() {
        return new Queue(MessagingConstants.CUSTOMER_INTERNAL_QUEUE);
    }

    @Bean(name = "commands.fb.customer")
    public Queue fbCustomerCommandQueue() {
        Map<String, Object> arguments = new HashMap<>();
        arguments.put("x-dead-letter-exchange", MessagingConstants.CUSTOMER_FB_DLE_EXCHANGE);
        return new Queue(MessagingConstants.CUSTOMER_FB_QUEUE, true, false, false, arguments);
    }

    @Bean
    public Binding fbBinding() {
        return BindingBuilder.bind(fbCustomerCommandQueue()).to(customerExchange()).withQueueName();
    }

    @Bean
    public Binding binding() {
        return BindingBuilder.bind(customerCommandQueue()).to(customerExchange()).withQueueName();
    }

    /**
     * dead letter configuration
     */
    @Bean
    public Queue fbCustomerDeadLetterQueue() {
        return new Queue(MessagingConstants.CUSTOMER_FB_DLE_QUEUE);
    }

    @Bean
    public FanoutExchange customerDeadLetterExchange() {
        return new FanoutExchange(MessagingConstants.CUSTOMER_FB_DLE_EXCHANGE);
    }

    @Bean
    public Binding dlq() {
        return BindingBuilder.bind(fbCustomerDeadLetterQueue()).to(customerDeadLetterExchange());
    }

    @Bean
    public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(ConnectionFactory connectionFactory, @DefaultMessageConverterQualifier MessageConverter messageConverter) {
        SimpleRabbitListenerContainerFactory simpleRabbitListenerContainerFactory = new SimpleRabbitListenerContainerFactory();
        simpleRabbitListenerContainerFactory.setConnectionFactory(connectionFactory);
        simpleRabbitListenerContainerFactory.setDefaultRequeueRejected(false);
        //give handlers 3 attempts
        simpleRabbitListenerContainerFactory.setAdviceChain(RetryInterceptorBuilder.stateless()
                .maxAttempts(3)
                .build());
        return simpleRabbitListenerContainerFactory;
    }
}
