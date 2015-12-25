package de.effectivetrainings.billy.registration.domain.registrationdetails;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@NoArgsConstructor
@Data
public class RegistrationDetails {

    @NonNull
    private Salutation salutation;
    @NonNull
    private NameDetails nameDetails = new NameDetails();
    @NonNull
    private AddressDetails addressDetails = new AddressDetails();
    @NonNull
    private CompanyDetails companyDetails = new CompanyDetails();
    //TODO think where to store this..
    @NonNull
    private String fastbillApiKey;
}
