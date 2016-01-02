package de.effectivetrainings.support.events.impl.conversion.json;

import de.effectivetrainings.support.events.api.ApiVersion;
import de.effectivetrainings.support.events.api.EventMessageContentType;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.util.ClassUtils;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class EventContentTypeProvider {

    static final String DEFAULT_RESOURCE_PATTERN = "**/*.class";


    private final ResourcePatternResolver resourcePatternResolver;
    private final MetadataReaderFactory metadataReaderFactory;
    private final String basePackage;
    private Map<String, Class> eventClasses;


    public EventContentTypeProvider(
            String basePackage, MetadataReaderFactory metadataReaderFactory,
            ResourcePatternResolver
                    resourcePatternResolver) {
        this.basePackage = Objects.requireNonNull(basePackage);
        this.metadataReaderFactory = Objects.requireNonNull(metadataReaderFactory);
        this.resourcePatternResolver = Objects.requireNonNull(resourcePatternResolver);
    }

    public EventContentTypeProvider(
            MetadataReaderFactory metadataReaderFactory,
            ResourcePatternResolver
                    resourcePatternResolver) {
        this("", metadataReaderFactory, resourcePatternResolver);
    }

    public <T> Class<T> findTypeByContentType(String contentType) {
        return eventClasses.get(contentType);
    }

    public Set<String> availableContentTypes() {
        return eventClasses.keySet();
    }

    @PostConstruct
    protected void processEvents() {
        String packageSearchPath = ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX +
                resolveBasePackage()  + "/" + DEFAULT_RESOURCE_PATTERN;
        try {
            List<Resource> resources = Arrays.asList(this.resourcePatternResolver.getResources(packageSearchPath));
            this.eventClasses = resources
                    .stream()
                    .filter(Resource::isReadable)
                    .map(this::readMetaData)
                    .filter(reader -> reader
                            .getAnnotationMetadata()
                            .hasAnnotation(EventMessageContentType.class.getName()))
                    .map(this::mapClass)
                    .collect(Collectors.toMap(aClass -> toContentType(aClass.getAnnotation
                                    (EventMessageContentType.class), aClass.getAnnotation(ApiVersion.class)),
                            Function.identity()));

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private String toContentType(EventMessageContentType annotation, ApiVersion apiVersion) {
        return EventContentType.forContentType(annotation.eventSource(), apiVersion != null ? apiVersion.version() : 1, annotation.classType());
    }

    private Class<?> mapClass(MetadataReader metadataReader) {
        try {
            return Class.forName(metadataReader.getClassMetadata().getClassName());
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    private MetadataReader readMetaData(Resource resource) {
        try {
            return metadataReaderFactory.getMetadataReader(resource);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    protected String resolveBasePackage() {
        return ClassUtils.convertClassNameToResourcePath(basePackage);
    }
}
