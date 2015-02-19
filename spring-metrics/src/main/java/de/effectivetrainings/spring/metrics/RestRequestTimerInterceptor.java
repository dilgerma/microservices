package de.effectivetrainings.spring.metrics;

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

    public RestRequestTimerInterceptor(MetricsProvider metricsProvider) {
        this.metricsProvider = metricsProvider;
    }

    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body, ClientHttpRequestExecution execution) throws IOException {
        Timer timer = metricsProvider.timer(request.getURI().toString());
        Timer.Context context = timer.time();
        try {
            ClientHttpResponse response = execution.execute(request, body);
            return response;
        } finally {
            context.stop();
        }
    }
}
