package de.effectivetrainings.billy.ui.config;

import org.springframework.beans.factory.annotation.Qualifier;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface DefaultMessageConverterQualifier {
}
