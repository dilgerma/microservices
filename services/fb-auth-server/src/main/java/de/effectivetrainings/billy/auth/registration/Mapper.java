package de.effectivetrainings.billy.auth.registration;

public interface Mapper<T, U> {

    public T from(U t);

    public U to(T u);
}
