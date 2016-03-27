package de.effectivetrainings.billy.auth.registration.repository;


import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRegistrationRepository extends JpaRepository<CustomerRegistrationData, Long> {

    CustomerRegistrationData findByEmail(String email);

    CustomerRegistrationData findByToken(String token);
}
