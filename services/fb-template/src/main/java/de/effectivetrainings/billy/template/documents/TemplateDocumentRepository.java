package de.effectivetrainings.billy.template.documents;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * don´t use @Repository here.
 * see https://github.com/spring-projects/spring-boot/issues/1929
 */
@Component
public interface TemplateDocumentRepository extends MongoRepository<TemplateDocument, String> {

    @Query("{ 'customerId' : ?0 }")
    public List<TemplateDocument> findByCustomer(String customerId);
}
