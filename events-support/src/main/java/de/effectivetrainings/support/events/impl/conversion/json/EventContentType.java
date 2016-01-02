package de.effectivetrainings.support.events.impl.conversion.json;

public class EventContentType {

    //application/vnd+effectivetrainings.events-<source-service>-<version>-<type>+json
    private static final String TEMPLATE = "application/vnd+effectivetrainings.events-%s-%s.%s+json";

    public static String forContentType(
            String source,
            int version, Class<?> type) {
        return String.format(TEMPLATE, source, version, type.getSimpleName());
    }
}
