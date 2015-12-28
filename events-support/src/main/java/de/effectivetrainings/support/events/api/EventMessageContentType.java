package de.effectivetrainings.support.events.api;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface EventMessageContentType {

    int version();

    Class<?> type();

    String source();
}
