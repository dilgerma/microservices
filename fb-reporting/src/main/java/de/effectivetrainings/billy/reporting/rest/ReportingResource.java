package de.effectivetrainings.billy.reporting.rest;

import com.google.common.base.Preconditions;
import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 */
@RestController
@RequestMapping("/report")
@Slf4j
public class ReportingResource {

    private final IncomeReportRepository incomeReportRepository;

    @Autowired
    public ReportingResource(IncomeReportRepository incomeReportRepository) {
        this.incomeReportRepository = Preconditions.checkNotNull(incomeReportRepository);
    }

    @RequestMapping
    public Report reports() {
        log.info("Requesting report");
        return incomeReportRepository.loadReport();
    }



    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected void handle(Exception e) {
        log.error("Resource ERROR", e);
    }
}
