package de.effectivetrainings.billy.auth.registration.repository;

public enum Authority {
    USER("USER");

    private String authority;

    Authority(String authority) {
        this.authority = authority;
    }

    public String getAuthority() {
        return authority;
    }
}
