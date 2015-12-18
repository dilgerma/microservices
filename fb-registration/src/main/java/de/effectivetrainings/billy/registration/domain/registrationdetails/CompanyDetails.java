package de.effectivetrainings.billy.registration.domain.registrationdetails;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@NoArgsConstructor
@Data
public class CompanyDetails {

    @NonNull
    private String companyName;
    @NonNull
    private String ustId;
}
