package de.effectivetrainings.billy.template.rest;

import de.effectivetrainings.billy.template.documents.TemplateDocument;
import de.effectivetrainings.billy.template.documents.TemplateDocumentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 *
 */
@RestController
@Slf4j
public class TemplateDocumentResource {

    public static final String TEMPLATE_URI = "/{customerId}/templates";
    private TemplateDocumentRepository templateDocumentRepository;

    @Autowired
    public TemplateDocumentResource(TemplateDocumentRepository templateDocumentRepository) {
        this.templateDocumentRepository = templateDocumentRepository;
    }

    @RequestMapping(value = TEMPLATE_URI, method = RequestMethod.POST)
    public void acceptTemplate(@RequestParam(value = "templateName") String name, @PathVariable(value = "customerId") String customerId, @RequestPart("file") MultipartFile file) throws Exception{
        log.info("Uploading template with {} bytes, templateName : {} and customerId: {}", file.getSize(), name, customerId);
        //TODO verify valid pdf document
        TemplateDocument templateDocument = new TemplateDocument(name, customerId, file.getBytes());
        templateDocumentRepository.insert(templateDocument);
        log.info("Template saved");
    }

    @RequestMapping(value = TEMPLATE_URI, method = RequestMethod.GET)
    public List<TemplateDocument> retrieveTemplates(@PathVariable("customerId") String customerId) {
        List<TemplateDocument> templates = templateDocumentRepository.findByCustomer(customerId);
        this.log.info("Found {} templates for customer {}", templates.size(), customerId);
        return templates;
    }


    @ExceptionHandler
    @ResponseBody
    public ErrorCode handle(TemplateDocumentUploadFailedException e) {
        log.error("Error uploading template document", e);
        return new ErrorCode(e.getMessage(), ErrorCode.ErrorType.UPLOAD_FAILED);
    }
}
