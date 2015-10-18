package de.effectivetrainings.spring.graphite;

import com.codahale.metrics.graphite.Graphite;
import lombok.extern.slf4j.Slf4j;

import javax.net.SocketFactory;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.charset.Charset;

@Slf4j
public class FailsafeGraphite extends Graphite {
    public FailsafeGraphite(InetSocketAddress address) {
        super(address);
    }

    public FailsafeGraphite(InetSocketAddress address, SocketFactory socketFactory) {
        super(address, socketFactory);
    }

    public FailsafeGraphite(InetSocketAddress address, SocketFactory socketFactory, Charset charset) {
        super(address, socketFactory, charset);
    }

    @Override
    public void connect() throws IllegalStateException, IOException {
        try {
            super.connect();
        } catch (Exception e) {
            /**
             * Graphite connector is super noisy and showers the logs with exceptions.
             * we ignore this and just render a warning to be able to recover.
             */
            log.debug("Cannot connect to graphite with exception {}");
        }
    }

    @Override
    public void send(String name, String value, long timestamp) throws IOException {
        try {
            super.send(name, value, timestamp);
        } catch (Exception e) {
            /**
             * Graphite connector is super noisy and showers the logs with exceptions.
             * we ignore this and just render a warning to be able to recover.
             */
            log.debug("Cannot connecto to graphite");
        }
    }
}
