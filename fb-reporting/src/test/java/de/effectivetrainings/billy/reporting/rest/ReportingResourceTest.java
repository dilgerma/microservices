package de.effectivetrainings.billy.reporting.rest;

import de.effectivetrainings.billy.reporting.domain.Report;
import de.effectivetrainings.billy.reporting.domain.ReportPeriod;
import de.effectivetrainings.billy.reporting.domain.repository.IncomeReportRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class ReportingResourceTest {

    private MockMvc mockMvc;

    private ReportingResource reportingResource;

    @Mock
    private IncomeReportRepository incomeReportRepository;

    @Before
    public void setUp() throws Exception {
        reportingResource = new ReportingResource(incomeReportRepository);
        mockMvc = MockMvcBuilders.standaloneSetup(reportingResource).build();

        when(incomeReportRepository.loadReport(any(ReportPeriod.class))).thenReturn(new Report(new ArrayList<>(), new ArrayList<>()));
    }

    @Test
    public void performCurrentMonthSelection() throws Exception {
        mockMvc.perform(get(ReportingResource.BASE_PATH + "/month/current")).andExpect(status().isOk());
        verify(incomeReportRepository).loadReport(ReportPeriod.currentMonth());
    }

    @Test
    public void performLastMonthSelection() throws Exception {
        mockMvc.perform(get(ReportingResource.BASE_PATH + "/month/last")).andExpect(status().isOk());
        verify(incomeReportRepository).loadReport(ReportPeriod.lastMonth());
    }

    @Test
    public void performExactMonthSelection() throws Exception {
        mockMvc.perform(get(ReportingResource.BASE_PATH + "/month/7")).andExpect(status().isOk());
        verify(incomeReportRepository).loadReport(ReportPeriod.withMonthInCurrentYear(7));
    }

    @Test
    public void performCurrentYear() throws Exception {
        mockMvc.perform(get(ReportingResource.BASE_PATH + "/year/current")).andExpect(status().isOk());
        verify(incomeReportRepository).loadReport(ReportPeriod.currentYear());
    }

    @Test
    public void performLastYear() throws Exception {
        mockMvc.perform(get(ReportingResource.BASE_PATH + "/year/last")).andExpect(status().isOk());
        verify(incomeReportRepository).loadReport(ReportPeriod.lastYear());
    }
}