package de.effectivetrainings.template.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * error code representation
 */
@Getter
@AllArgsConstructor
public class ErrorCode {

    public static enum ErrorType {
        UPLOAD_FAILED,
        NOT_ACCEPTED
    }

    private String msg;
    private ErrorType errorType;
}
