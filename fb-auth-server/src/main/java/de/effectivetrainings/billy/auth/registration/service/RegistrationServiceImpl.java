package de.effectivetrainings.billy.auth.registration.service;


import de.effectivetrainings.billy.auth.registration.domain.CustomerRegistration;
import de.effectivetrainings.billy.auth.registration.password.PasswordConfirmation;
import de.effectivetrainings.billy.auth.registration.repository.CustomerRegistrationRepository;
import de.effectivetrainings.billy.auth.registration.repository.RegistrationConfirmationToken;
import de.effectivetrainings.billy.auth.registration.service.exception.AlreadyRegisteredException;
import de.effectivetrainings.billy.auth.registration.service.exception.InvalidRegistrationTokenException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class RegistrationServiceImpl implements RegistrationService {


    private CustomerRegistationDocumentMapper customerRegistationDocumentMapper = new CustomerRegistationDocumentMapper();

    private CustomerRegistrationRepository customerRegistrationRepository;

    public RegistrationServiceImpl(CustomerRegistrationRepository customerRegistrationRepository) {
        this.customerRegistrationRepository = customerRegistrationRepository;
    }

    @Override
    public void register(CustomerRegistration customerRegistration) {
        if (alreadyRegistered(customerRegistration)) {
            throw new AlreadyRegisteredException(customerRegistration);
        }
        log.info("Registering email {} for Token : {}", customerRegistration.getEmail(), customerRegistration.getRegistrationConfirmationToken());
        customerRegistrationRepository.save(customerRegistationDocumentMapper.to(customerRegistration));
        //TODO send customer registration event...
    }

    @Override
    public CustomerRegistration findRegistrationForToken(RegistrationConfirmationToken token) {
        final CustomerRegistration customerRegistration = customerRegistationDocumentMapper.from(
                customerRegistrationRepository.findByToken(token.getToken()));

        if (customerRegistration == null) {
            throw new InvalidRegistrationTokenException(token);
        }
        if (customerRegistration.isConfirmed()) {
            throw new AlreadyRegisteredException(customerRegistration);
        }

        return customerRegistration;
        //TODO send customer confirmed event
    }

    @Override
    public void confirmAccount(
            CustomerRegistration registration, PasswordConfirmation passwordConfirmation) {
        registration.confirm(passwordConfirmation.getPassword());
        customerRegistrationRepository.save(customerRegistationDocumentMapper.to(registration));
        //TODO send customer registration completed event
    }

    private boolean alreadyRegistered(CustomerRegistration customerRegistration) {
        return customerRegistrationRepository.exists(customerRegistration.getEmail().getEmail());
    }

}
