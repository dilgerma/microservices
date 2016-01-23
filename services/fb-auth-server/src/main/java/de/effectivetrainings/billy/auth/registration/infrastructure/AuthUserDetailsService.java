package de.effectivetrainings.billy.auth.registration.infrastructure;

import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationDocument;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class AuthUserDetailsService implements UserDetailsService {

    private CustomerRegistrationRepository customerRegistrationRepository;
    private UserDetailsMapper userDetailsMapper = new UserDetailsMapper();

    public AuthUserDetailsService(CustomerRegistrationRepository customerRegistrationRepository) {
        this.customerRegistrationRepository = customerRegistrationRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        final CustomerRegistrationDocument byEmail = customerRegistrationRepository.findByEmail(email);
        return userDetailsMapper.from(byEmail);
    }
}
