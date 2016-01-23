package de.effectivetrainings.billy.registration.domain.registrationdetails;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@NoArgsConstructor
@Data
public class AddressDetails {

    @NonNull
    private String street;
    @NonNull
    private String houseNumber;
    @NonNull
    private String zip;
    @NonNull
    private String city;

}
