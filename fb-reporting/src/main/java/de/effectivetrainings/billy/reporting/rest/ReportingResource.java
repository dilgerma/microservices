package de.effectivetrainings.billy.reporting.rest;

import com.google.common.base.Preconditions;
import de.effectivetrainings.billy.reporting.domain.ReportPeriod;
import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import de.effectivetrainings.billy.reporting.rest.outbound.ReportValue;
import de.effectivetrainings.billy.reporting.rest.outbound.ReportingOutboundModelMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

/**
 *
 */
@RestController
@Slf4j
public class ReportingResource {

    public static final String BASE_PATH = "/report";

    private final IncomeReportRepository incomeReportRepository;

    private ReportingOutboundModelMapper outboundModelMapper = new ReportingOutboundModelMapper();

    @Autowired
    public ReportingResource(IncomeReportRepository incomeReportRepository) {
        this.incomeReportRepository = Preconditions.checkNotNull(incomeReportRepository);
    }

    @RequestMapping(BASE_PATH)
    public ReportValue reports(@RequestParam(value = "from", required = false) LocalDate from, @RequestParam(value = "to", required = false) LocalDate to) {
        log.info("Requesting report");
        return outboundModelMapper.toReport(incomeReportRepository.loadReport(ReportPeriod.of(from, to)));
    }

    @RequestMapping(BASE_PATH + "/month/{periodSelector}")
    public ReportValue monthReport(@PathVariable("periodSelector") String periodSelector) {
        log.info("Requesting report for period selector {}", periodSelector);

        MonthPeriodSelector monthPeriodSelector = MonthPeriodSelector.of(periodSelector);
        return outboundModelMapper.toReport(incomeReportRepository.loadReport(monthPeriodSelector.getPeriod()));
    }

    @RequestMapping(BASE_PATH + "/year/current")
    public ReportValue reportsCurrentYear() {
        log.info("Requesting report for current year");
        return outboundModelMapper.toReport(incomeReportRepository.loadReport(ReportPeriod.currentYear()));
    }

    @RequestMapping(BASE_PATH + "/year/last")
       public ReportValue reportsLastYear() {
           log.info("Requesting report for last year");
           return outboundModelMapper.toReport(incomeReportRepository.loadReport(ReportPeriod.lastYear()));
       }


    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler
    protected GenericError handle(Exception e) {
        log.error("Resource ERROR", e);
        return new GenericError(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value());
    }


}
