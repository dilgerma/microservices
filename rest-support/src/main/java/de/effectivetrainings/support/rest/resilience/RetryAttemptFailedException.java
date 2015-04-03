package de.effectivetrainings.support.rest.resilience;

/**
 *
 */
public class RetryAttemptFailedException extends RuntimeException {

    public RetryAttemptFailedException(Throwable cause) {
        super(cause);
    }

    public RetryAttemptFailedException(String message) {
        super(message);
    }
}
