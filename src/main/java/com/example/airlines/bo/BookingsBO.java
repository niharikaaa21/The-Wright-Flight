package com.example.airlines.bo;

import java.util.List;

import com.example.airlines.entity.Bookings;

public interface BookingsBO {
	
	List<Bookings> fetchBookings();
	Bookings createBookings(Bookings booking);

}
