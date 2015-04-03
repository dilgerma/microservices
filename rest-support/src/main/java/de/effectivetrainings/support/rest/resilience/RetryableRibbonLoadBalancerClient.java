package de.effectivetrainings.support.rest.resilience;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.client.loadbalancer.LoadBalancerRequest;
import org.springframework.cloud.netflix.ribbon.RibbonLoadBalancerClient;
import org.springframework.cloud.netflix.ribbon.SpringClientFactory;

/**
 *
 */
@Slf4j
public class RetryableRibbonLoadBalancerClient extends RibbonLoadBalancerClient {


    private int maxRetries;

    public RetryableRibbonLoadBalancerClient(int maxRetries, SpringClientFactory clientFactory) {
        super(clientFactory);
        this.maxRetries = maxRetries;
    }

    @Override
    public <T> T execute(String serviceId, LoadBalancerRequest<T> request) {
        int retries = 0;
        while(retries < maxRetries) {
            try {
                return super.execute(serviceId, request);
            } catch (Exception e) {
                retries++;
                if(retries < maxRetries) {
                    log.info("Request Failed - Retry is configured - Retry Request {} of {}", retries, maxRetries);
                } else {
                    log.error("Max number of retries reached. Request failed with Exception ", e);
                    throw new RetryAttemptFailedException(e);
                }
            }

        }
        throw new RetryAttemptFailedException("Retry failed - somehow neither exception nor result could be calculated. Seems like a programmers error.");
    }
}
