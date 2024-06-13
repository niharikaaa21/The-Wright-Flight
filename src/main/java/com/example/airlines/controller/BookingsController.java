package com.example.airlines.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.airlines.bo.BookingsBO;
import com.example.airlines.entity.Bookings;

@Controller
public class BookingsController {
	
	@Autowired
	private BookingsBO bookingsBO;
	
	@GetMapping("/bookings")
	public ResponseEntity<List<Bookings>> getBookings(){
			
		return new ResponseEntity<List<Bookings>>(bookingsBO.fetchBookings(),HttpStatus.OK);
		
	}
	
	@GetMapping("/viewbookings")
	public String getViewBookings() {
		return "viewbookings";
	}
	
//	@GetMapping("/bookflight")
//	public ResponseEntity<Bookings> addBooking(Bookings booking){
//			
//		return new ResponseEntity<Bookings>(bookingsBO.createBookings(booking),HttpStatus.OK);
//		
//	}
	
	@GetMapping("/flightbooked")
	public String getFlightBooked() {
		return "flightbooked";
	}
	
	@GetMapping("/bookflight")
	public String addBooking(Bookings booking){	
		
		bookingsBO.createBookings(booking);			
		return "bookticket";
		
	}

}
