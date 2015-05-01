package de.effectivetrainings.eventstore.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.config.SimpleRabbitListenerContainerFactory;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.retry.interceptor.RetryInterceptorBuilder;

/**
 *
 */
@Configuration
public class MessagingConfig {

    @Bean(name = "eventStoreQEvents")
    public Queue eventQueue() {
        return new Queue("eventstore.events");
    }

    @Bean
    public FanoutExchange inboundEvents() {
        return new FanoutExchange("eventStore.inbound.events");
    }

    @Bean
    public Binding eventPersistenceBinding() {
        return BindingBuilder.bind(eventQueue()).to(inboundEvents());
    }

    @Bean(name = "eventMessageContainerFactory")
        public SimpleRabbitListenerContainerFactory rabbitListenerContainerFactory(ConnectionFactory connectionFactory, @DefaultMessageConverterQualifier MessageConverter messageConverter) {
            SimpleRabbitListenerContainerFactory simpleRabbitListenerContainerFactory = new SimpleRabbitListenerContainerFactory();
            simpleRabbitListenerContainerFactory.setConnectionFactory(connectionFactory);
            simpleRabbitListenerContainerFactory.setMessageConverter(messageConverter);
            simpleRabbitListenerContainerFactory.setDefaultRequeueRejected(false);
            //give handlers 3 attempts
            simpleRabbitListenerContainerFactory.setAdviceChain(RetryInterceptorBuilder.stateless()
                    .maxAttempts(3)
                    .build());
            return simpleRabbitListenerContainerFactory;
        }

    @Bean
       @DefaultMessageConverterQualifier
       public MessageConverter jsonMessageConverter() {
           return new Jackson2JsonMessageConverter();
       }
}
