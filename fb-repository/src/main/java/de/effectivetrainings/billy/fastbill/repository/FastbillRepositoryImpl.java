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


package de.effectivetrainings.billy.fastbill.repository;

import de.effectivetrainings.billy.fastbill.domain.FastbillResponse;
import de.effectivetrainings.correlation.CorrelationId;
import de.effectivetrainings.billy.fastbill.FastbillRepository;
import de.effectivetrainings.billy.fastbill.FastbillRequestParameter;
import de.effectivetrainings.billy.fastbill.FastbillUserData;
import de.effectivetrainings.billy.fastbill.config.Profiles;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Base64;

/**
 * Repository to access Fastbill API.
 *
 * @author <a href=mailto:martin@effectivetrainings.de">Martin Dilger</a>
 * @since: 17.03.14
 */
@Profile(Profiles.PROD)
public class FastbillRepositoryImpl implements FastbillRepository {

    private static final Logger LOG = LoggerFactory.getLogger(FastbillRepositoryImpl.class);

    //TODO extract to external spring config, and check why it does not work with @Value
    private final CorrelationId correlationId;

    private RestTemplate restTemplate;

    private FastbillUserData userData;

    private String apiURI;


    @Autowired
    public FastbillRepositoryImpl( @Value("${app.fastbill.uri}") String apiUri, RestTemplate restTemplate, FastbillUserData userData, CorrelationId correlationId) {
        this.restTemplate = restTemplate;
        this.userData = userData;
        this.correlationId = correlationId;
        this.apiURI = apiUri;

    }

    @Override
    public FastbillResponse request(FastbillRequestParameter parameter){
        try {
            HttpHeaders headers = getHttpHeaders();
            HttpEntity entity = new HttpEntity(parameter.toJson(), headers);
            ResponseEntity<FastbillResponse> exchange = restTemplate.exchange(apiURI, HttpMethod.POST, entity, FastbillResponse.class);
            return exchange.getBody();
        } catch (Exception e)
        {
            LOG.error("error making REST call", e);
            throw new RuntimeException(e);
        }
    }

    private HttpHeaders getHttpHeaders() {
        String auth = "Basic " + new String(Base64.getEncoder().encode((userData.getEmail() + ":" + userData.getApiKey()).getBytes()));
        HttpHeaders headers = new HttpHeaders();
        headers.put("Authorization", Arrays.asList(auth));
        headers.add(CorrelationId.CORRELATION_ID_HEADER_KEY, correlationId.getCorrelationId());
        return headers;
    }


}
