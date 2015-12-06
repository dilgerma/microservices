package de.effectivetrainings.billy.registration.ui.mapper;

public interface Mapper<T,U> {

    T from(U from);

    U to(T to);
}
