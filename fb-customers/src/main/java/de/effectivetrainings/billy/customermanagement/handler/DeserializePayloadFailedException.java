package de.effectivetrainings.billy.customermanagement.handler;

/**
 *
 */
public class DeserializePayloadFailedException extends RuntimeException {

    public DeserializePayloadFailedException(String message) {
        super(message);
    }

    public DeserializePayloadFailedException(String message, Throwable cause) {
        super(message, cause);
    }

    public DeserializePayloadFailedException(Throwable cause) {
        super(cause);
    }
}
