package de.effectivetrainings.billy.auth.registration.infrastructure;

import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationDocument;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.stream.Collectors;

public class UserDetailsMapper {

    public org.springframework.security.core.userdetails.UserDetails from(CustomerRegistrationDocument customerRegistrationDocument) {
        return new User(customerRegistrationDocument.getEmail(),
                customerRegistrationDocument.getPassword(),
                customerRegistrationDocument.isConfirmed(),
                customerRegistrationDocument.isConfirmed(),
                true,
                true,
                customerRegistrationDocument.getAuthorities().stream().map(
                        authority -> (GrantedAuthority) () -> authority.getAuthority()).collect(Collectors.toList()));
    }
}
