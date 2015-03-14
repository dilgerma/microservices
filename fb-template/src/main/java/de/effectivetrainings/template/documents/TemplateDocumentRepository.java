package de.effectivetrainings.template.documents;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 */
@Repository
public interface TemplateDocumentRepository extends MongoRepository<TemplateDocument, String> {

    @Query("{ 'customerId' : ?0 }")
    public List<TemplateDocument> findByCustomer(String customerId);
}
