package com.example.airlines.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.airlines.entity.Bookings;

@Repository
public interface BookingsRepository extends JpaRepository<Bookings, Integer> {

	List<Bookings> findByUserIdOrderByFlightDateDesc(int user_id);
}
