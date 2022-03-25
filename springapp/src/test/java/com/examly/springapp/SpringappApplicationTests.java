package com.examly.springapp;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

//import org.junit.Test;
import org.junit.jupiter.api.Test; 
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureMockMvc
@RunWith(SpringRunner.class)
class SpringappApplicationTests {

	@Autowired
    private MockMvc mockMvc;
	
	@Test
	@Transactional
    public void test_case1() throws Exception {
        String userOne = "{\"email\":\"Test@gmail.com\",\"password\":\"Testing\",\"mobileNumber\":\"1234598760\",\"username\":\"TestSignup\",\"userRole\":\"user\",\"age\":\"21\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
		.contentType(MediaType.APPLICATION_JSON)
		.content(userOne)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void test_case2() throws Exception {
       String userOne = "{\"bikeID\":\"011\",\"bikeModel\":\"123\",\"adminID\":\"5678\",\"status\":\"available\",\"price\":\"500\",\"type\":\"Scooter\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/admin/addBike")
		.contentType(MediaType.APPLICATION_JSON)
		.content(userOne)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
	
	@Test
	@Transactional
    public void test_case3() throws Exception {
	 	String userOne = "{\"email\":\"Test@gmail.com\",\"password\":\"Testing\",\"mobileNumber\":\"1234598760\",\"username\":\"TestSignup\",\"userRole\":\"user\",\"age\":\"21\"}";
        mockMvc.perform(MockMvcRequestBuilders.post("/user/signup")
		.contentType(MediaType.APPLICATION_JSON)
		.content(userOne)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }

	@Test
	@Transactional
    public void test_case4() throws Exception {
        String userOne = "{\"bikeID\":\"011\",\"bikeModel\":\"123\",\"adminID\":\"5678\",\"status\":\"available\",\"price\":\"500\",\"type\":\"Scooter\"}";
        mockMvc.perform(MockMvcRequestBuilders.put("/admin/editBike")
		.param("bikeID","011")
		.contentType(MediaType.APPLICATION_JSON)
		.content(newInstitute)
		.accept(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk())
		.andReturn();
    }
}
