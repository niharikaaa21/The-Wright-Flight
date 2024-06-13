package com.example.airlines.bo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.airlines.entity.Flights;

public interface FlightsBO {
	
	Page<Flights> fetchFlights(String origin, String destination, int day, int min_price, int max_price, Pageable page);

}
