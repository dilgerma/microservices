package de.effectivetrainings.billy.auth.registration.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRegistrationRepository extends MongoRepository<CustomerRegistrationDocument, String> {

    CustomerRegistrationDocument findByEmail(String email);

    CustomerRegistrationDocument findByToken(String token);
}
