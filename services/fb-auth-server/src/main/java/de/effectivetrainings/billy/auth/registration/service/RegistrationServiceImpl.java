package de.effectivetrainings.billy.auth.registration.service;


import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.password.PasswordConfirmation;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationData;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationRepository;
import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import de.effectivetrainings.billy.auth.registration.service.exception.AlreadyRegisteredException;
import de.effectivetrainings.billy.auth.registration.service.exception.InvalidRegistrationTokenException;
import de.effectivetrainings.support.events.api.EventEmitter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class RegistrationServiceImpl implements RegistrationService {


    private CustomerRegistationDocumentMapper customerRegistationDocumentMapper = new CustomerRegistationDocumentMapper();

    private CustomerRegistrationRepository customerRegistrationRepository;
    private EventEmitter eventEmitter;

    public RegistrationServiceImpl(CustomerRegistrationRepository customerRegistrationRepository, EventEmitter eventEmitter) {
        this.customerRegistrationRepository = customerRegistrationRepository;
        this.eventEmitter = eventEmitter;
    }

    @Override
    public CustomerRegistration register(CustomerRegistration customerRegistration) {
        if (alreadyRegistered(customerRegistration)) {
            throw new AlreadyRegisteredException(customerRegistration);
        }
        log.info("Registering email {} for Token : {}", customerRegistration.getEmail(), customerRegistration.getRegistrationConfirmationToken());
        final CustomerRegistrationData registrationData = customerRegistationDocumentMapper.to(customerRegistration);
        final CustomerRegistrationData persisted = customerRegistrationRepository.save(registrationData);
        return customerRegistationDocumentMapper.from(persisted);
    }

    @Override
    public CustomerRegistration findRegistrationForToken(RegistrationConfirmationToken token) {
        final CustomerRegistrationData byToken = customerRegistrationRepository.findByToken(token.getToken());
        if (byToken == null) {
            throw new InvalidRegistrationTokenException(token);
        }
        final CustomerRegistration customerRegistration = customerRegistationDocumentMapper.from(
                byToken);

        if (customerRegistration == null) {
            throw new InvalidRegistrationTokenException(token);
        }
        if (customerRegistration.isConfirmed()) {
            throw new AlreadyRegisteredException(customerRegistration);
        }

        return customerRegistration;
    }

    @Override
    public void confirmAccount(
            CustomerRegistration registration, PasswordConfirmation passwordConfirmation) {
        final CustomerRegistrationData byEmail = customerRegistrationRepository.findByEmail(registration.getEmail()
                .getEmail());
        byEmail.confirm(passwordConfirmation.getPassword());
        customerRegistrationRepository.save(byEmail);
    }

    private boolean alreadyRegistered(CustomerRegistration customerRegistration) {
        return customerRegistrationRepository.findByEmail(customerRegistration.getEmail().getEmail()) != null;
    }

}
