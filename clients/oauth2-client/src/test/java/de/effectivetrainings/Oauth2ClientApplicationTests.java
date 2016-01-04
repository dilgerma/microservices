package de.effectivetrainings;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.security.oauth2.client.OAuth2RestOperations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Oauth2ClientApplication.class)
@WebAppConfiguration
public class Oauth2ClientApplicationTests {

	@Autowired
	private OAuth2RestOperations oAuth2RestOperations;

	@Test
	public void contextLoads() {
	}

}
