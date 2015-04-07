/**
 Copyright (c) 2013, Martin Dilger - Effective Trainings & Consulting - EffectiveTrainings.de
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.
 * Neither the name of Effective Trainings & Consulting nor the
 names of its contributors may be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL EffectiveTrainings BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


package de.effectivetrainings.billy.fastbill.rest;


import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillRequestParameter;
import de.effectivetrainings.billy.fastbill.ServiceType;
import de.effectivetrainings.billy.fastbill.domain.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 28.03.14
 */
@RestController
@RequestMapping("/rest/fastbill/projects")
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class ProjectResource extends BaseResource {

    private FastbillRepository fastbillRepository;

    @Autowired
    public ProjectResource(FastbillRepository repository) {
        this.fastbillRepository = repository;
    }

    @RequestMapping(value = "/times")
    public ProjectTime times(@DateTimeFormat(pattern = "yyyy-MM-dd")
                                           @RequestParam(required = false, value = "startDate") Date start,     @DateTimeFormat(pattern = "yyyy-MM-dd")
    @RequestParam(required = false, value = "endDate") Date end, @RequestParam(required = false, value = "projectId") String projectId) {

        FastbillRequestParameter parameter = new FastbillRequestParameter(ServiceType.TIMES, -1, new Filter(Filter.START_DATE, start), new Filter(Filter.END_DATE, end), new Filter(Filter.PROJECT_ID, projectId));

        List<Time> times = fastbillRepository.request(parameter).getResponse().getTimes();

        //TODO check how to do this nicely in java 8
        Map<String, List<Time>> timesByProject = new HashMap<String, List<Time>>();
        Map<String, Long> fullBillableMinutes = new HashMap<String, Long>();

        for(Time time : times) {
            if(timesByProject.get(time.getProjectId()) == null) {
                timesByProject.put(time.getProjectId(), new ArrayList<Time>());
            }

            if(fullBillableMinutes.get(time.getProjectId()) == null) {
                fullBillableMinutes.put(time.getProjectId(), 0L);
            }
            timesByProject.get(time.getProjectId()).add(time);
            fullBillableMinutes.put(time.getProjectId(), fullBillableMinutes.get(time.getProjectId())+time.getBillableMinutes());
        }

        List<Customer> customers = fastbillRepository.request(new FastbillRequestParameter(ServiceType.CUSTOMER, -1, Filter.NONE)).getResponse().getCustomers();
        Map<String, Customer> customersById = customers.stream().collect(Collectors.toMap(Customer::getCustomerId, c -> c));

        List<Project> projects = fastbillRepository.request(new FastbillRequestParameter(ServiceType.PROJECT,-1, new Filter(Filter.PROJECT_ID, projectId))).getResponse().getProjects();

        //FAstbill API has a Bug, filter by Project ID does not work
        if(projectId != null) {
            projects = projects.stream().filter(project -> project.getProjectId().equals(projectId)).collect(Collectors.toList());
        }
        List<ProjectTime> projectTimes = new ArrayList<>();
        for(Project project : projects) {
            ProjectTime projectTime = new ProjectTime();
            projectTime.setProjectName(project.getProjectName());
            Customer customer = customersById.get(project.getCustomerId());
            projectTime.setOrganization(customer != null ? customer.getOrganization() : null);
            projectTime.setBookings(timesByProject.get(project.getProjectId()));
            projectTime.setBilledMinutes(fullBillableMinutes.get(project.getProjectId()));
            projectTime.setHourRate(project.getHourRate());
            projectTime.setProjectId(project.getProjectId());
            projectTimes.add(projectTime);

        }

        return projectTimes.get(0);
    }

    @RequestMapping(value = "")
    public List<Project> findProjects() {
        FastbillRequestParameter parameter = new FastbillRequestParameter(ServiceType.PROJECT, -1, Filter.NONE);

        List<Project> projects = fastbillRepository.request(parameter).getResponse().getProjects();

        Map<String, Customer> customers = findCustomers().stream().collect(Collectors.toMap(Customer::getCustomerId, c->c));

        projects.stream().forEach(project -> {project.setCustomerName(customers.get(project.getCustomerId()).getOrganization());});

        return projects;
    }

    @RequestMapping(value = "/customers")
    public List<Customer> findCustomers() {
        FastbillRequestParameter parameter = new FastbillRequestParameter(ServiceType.CUSTOMER, -1, Filter.NONE);
        List<Customer> customers = fastbillRepository.request(parameter).getResponse().getCustomers();
        return customers;
    }


}
