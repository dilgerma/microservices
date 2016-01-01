package de.effectivetrainings.support.events.api;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
public @interface ApiVersion {

    int version() default 1;
}
