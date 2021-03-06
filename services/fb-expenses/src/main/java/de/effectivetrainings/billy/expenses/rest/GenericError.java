package de.effectivetrainings.billy.expenses.rest;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public class GenericError {
    
    @Getter
    private String msg;
    @Getter
    private int statusCode;
}
