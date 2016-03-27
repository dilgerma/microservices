package de.effectivetrainings.billy.auth.registration.infrastructure;

import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationData;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.stream.Collectors;

public class UserDetailsMapper {

    public org.springframework.security.core.userdetails.UserDetails from(CustomerRegistrationData customerRegistrationData) {
        return new User(customerRegistrationData.getEmail(),
                customerRegistrationData.getPassword(),
                customerRegistrationData.isConfirmed(),
                customerRegistrationData.isConfirmed(),
                true,
                true,
                customerRegistrationData.getAuthorities().stream().map(
                        authority -> (GrantedAuthority) () -> authority.getAuthority()).collect(Collectors.toList()));
    }
}
