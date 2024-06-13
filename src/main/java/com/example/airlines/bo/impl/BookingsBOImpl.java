package com.example.airlines.bo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.example.airlines.bo.BookingsBO;
import com.example.airlines.entity.Bookings;
import com.example.airlines.repositories.BookingsRepository;
import com.example.airlines.service.CustomUser;

public class BookingsBOImpl implements BookingsBO {
	
	@Autowired
	private BookingsRepository bookingsRepository;

	@Override
	public List<Bookings> fetchBookings() {
		// TODO Auto-generated method stub
//		return bookingsRepository.findAll();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		CustomUser user = (CustomUser) authentication.getPrincipal(); 

		return bookingsRepository.findByUserIdOrderByFlightDateDesc(user.getId());
		
	}
	
	@Override
	public Bookings createBookings(Bookings booking) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		CustomUser user = (CustomUser) authentication.getPrincipal(); 
		booking.setUserId(user.getId());
	
		return bookingsRepository.save(booking);
	}

}
