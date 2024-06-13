package com.example.airlines.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.airlines.bo.UserInfoBO;
import com.example.airlines.entity.Bookings;
import com.example.airlines.entity.UserInfo;
import com.example.airlines.service.CustomUserService;

@Controller
public class WelcomeController {
	
	@GetMapping("/welcome")
	public String getWelcome() {
		return "welcome";
	}
	
	@GetMapping("/login")
	public String getLogin() {
		return "login";
	}
	
	
	
	@GetMapping("/")
	public String hello() {
		return "welcome";
	}
	
	
	@GetMapping("/register")
	public String getRegister() {
		return "register";
	}
	
	@Autowired
	private UserInfoBO userInfoBO;
	
	
	@PostMapping("/register")
	public String addUser(UserInfo userInfo){
		
		userInfoBO.createUserInfo(userInfo);
			
//		return new ResponseEntity<UserInfo>(userInfoBO.createUserInfo(userInfo),HttpStatus.OK);
		return "registersuccess";
		
	}
	


}
