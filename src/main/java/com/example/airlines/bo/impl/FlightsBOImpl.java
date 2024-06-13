package com.example.airlines.bo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.airlines.bo.FlightsBO;
import com.example.airlines.entity.Flights;
import com.example.airlines.repositories.FlightsRepository;

public class FlightsBOImpl implements FlightsBO {

	@Autowired
	private FlightsRepository flightsRepository;
	
	@Override
	public Page<Flights> fetchFlights(String origin, String destination, int day, int min_price, int max_price, Pageable page) {
		// TODO Auto-generated method stub
//		return flightsRepository.findFoodsUsingQuery();
		return flightsRepository.findSome(origin, destination, day, min_price, max_price, page);
//		return flightsRepository.findAll();
	}

}
