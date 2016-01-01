package de.effectivetrainings.billy.registration.ui.registration;

import lombok.SneakyThrows;
import org.junit.Before;
import org.junit.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class RegistrationDetailsControllerTest {

    private MockMvc mockMvc;

    private RegistrationDetailsController testee;

    @Before
    public void setUp() throws Exception {
        testee = new RegistrationDetailsController();
        mockMvc = MockMvcBuilders.standaloneSetup(testee).build();
    }

    @SneakyThrows(Exception.class)
    @Test
    public void render_registratioDetailsPage() {
        mockMvc.perform(get("/")).andExpect(status().isOk());
    }
}