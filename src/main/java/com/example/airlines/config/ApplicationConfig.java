package com.example.airlines.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.airlines.bo.UserInfoBO;
import com.example.airlines.bo.FlightsBO;
import com.example.airlines.bo.impl.UserInfoBOImpl;

import nz.net.ultraq.thymeleaf.layoutdialect.LayoutDialect;

import com.example.airlines.bo.BookingsBO;
import com.example.airlines.bo.impl.FlightsBOImpl;
import com.example.airlines.bo.impl.BookingsBOImpl;


@Configuration
public class ApplicationConfig {
	
	
	@Bean
	UserInfoBO UserInfoBO(){ 
		return new UserInfoBOImpl();
	}
	
	@Bean
	FlightsBO FlightsBO(){ 
		return new FlightsBOImpl();
	}
	
	@Bean
	BookingsBO BookingsBO(){ 
		return new BookingsBOImpl();
	}
	
	@Bean
	public LayoutDialect layoutDialect() {
	  return new LayoutDialect();
	}


}
