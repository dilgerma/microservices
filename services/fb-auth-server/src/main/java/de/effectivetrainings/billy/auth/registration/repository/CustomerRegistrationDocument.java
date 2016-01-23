package de.effectivetrainings.billy.auth.registration.repository;

import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "auth.users")
@Value
@AllArgsConstructor
public class CustomerRegistrationDocument {

    @Id
    @NonNull
    private String email;
    @NonNull
    private String name;
    private String password;
    @NonNull
    private String token;
    @NonNull
    private boolean confirmed;
    @NonNull
    private List<Authority> authorities;
}
