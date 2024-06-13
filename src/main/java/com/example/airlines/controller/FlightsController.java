package com.example.airlines.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.airlines.bo.FlightsBO;
import com.example.airlines.entity.Flights;


@Controller
public class FlightsController {
	

	@Autowired
	private FlightsBO flightsBO;
	
	@GetMapping("/flights")
	public ResponseEntity<Page<Flights>> fetchFlights(String origin, String destination, int day, int min_price, int max_price, Pageable page){
			
		return new ResponseEntity<Page<Flights>>(flightsBO.fetchFlights(origin, destination, day, min_price, max_price, page),HttpStatus.OK);
		
	}
	
	@GetMapping("/display")
	public String getDisplay() {
		return "display";
	}
	

}
