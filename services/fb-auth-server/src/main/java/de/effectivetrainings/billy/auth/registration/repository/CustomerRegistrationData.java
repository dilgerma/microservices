package de.effectivetrainings.billy.auth.registration.repository;

import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Table;
import java.util.Collections;
import java.util.List;

@ToString
@Getter
@EqualsAndHashCode
@Entity
@Table(name = "CUSTOMER_REGISTRATION")
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class CustomerRegistrationData {

    @javax.persistence.Id
    @GeneratedValue
    @NonNull
    private Long id;

    @NonNull
    private String email;
    @NonNull
    private String name;
    private String password;
    @Setter
    private String token;
    private boolean confirmed;
    @LazyCollection(value = LazyCollectionOption.FALSE)
    @ElementCollection(targetClass = Authority.class)
    private List<Authority> authorities;

    public CustomerRegistrationData(String email, String name) {
        this(email, name, null, null, false, Collections.emptyList());
    }

    public CustomerRegistrationData(String name, String email, String password, String token, boolean confirmed,
                                    List<Authority> authorities
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.token = token;
        this.confirmed = confirmed;
        this.authorities = authorities;
    }

    public void confirm(String password) {
        if (this.password != null) {
            throw new IllegalStateException("Password cannot be confirmed more than once");
        }
        this.password = password;
        this.confirmed = true;

    }
}
