package de.effectivetrainings.spring.metrics;

import com.codahale.metrics.Meter;
import com.codahale.metrics.Timer;
import org.springframework.http.HttpRequest;
import org.springframework.http.client.ClientHttpRequestExecution;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.http.client.ClientHttpResponse;

import java.io.IOException;

/**
 *
 */
public class RestRequestTimerInterceptor implements ClientHttpRequestInterceptor {

    private MetricsProvider metricsProvider;

    private String serviceName;

    public RestRequestTimerInterceptor(String serviceName, MetricsProvider metricsProvider) {
        this.metricsProvider = metricsProvider;
        this.serviceName = serviceName;
    }

    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
        Timer timer = metricsProvider.timer(serviceName);
        Timer.Context context = timer.time();
        Meter meter = metricsProvider.meter(serviceName, request.getURI().getPath());

        try {
            ClientHttpResponse response = execution.execute(request, body);
            return response;
        } finally {
            context.stop();
            meter.mark();
        }
    }
}
