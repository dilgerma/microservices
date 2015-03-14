package de.effectivetrainings.template.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * thrown whenever an upload of a template document failed
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class TemplateDocumentUploadFailedException extends RuntimeException {

    public TemplateDocumentUploadFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}
