package de.effectivetrainings.support.events.api;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * only relevant for the receiver.
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface EventMessageContentType {

    Class<?> classType();

    String eventSource();
}
