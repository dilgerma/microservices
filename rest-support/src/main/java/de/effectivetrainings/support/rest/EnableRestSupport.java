package de.effectivetrainings.support.rest;

import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

/**
 *
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import(RestSupportAutoConfig.class)
public @interface EnableRestSupport {
}
