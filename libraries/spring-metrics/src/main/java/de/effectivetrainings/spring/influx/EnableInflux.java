package de.effectivetrainings.spring.influx;

import org.springframework.context.annotation.Import;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@Import(InfluxConfig.class)
public @interface EnableInflux {
}
