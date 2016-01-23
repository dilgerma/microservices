package de.effectivetrainings.billy.registration.domain.registrationdetails;

import lombok.*;

@RequiredArgsConstructor
@NoArgsConstructor
@Data
public class NameDetails {

    @NonNull
    private String firstname;
    @NonNull
    private String name;
}
