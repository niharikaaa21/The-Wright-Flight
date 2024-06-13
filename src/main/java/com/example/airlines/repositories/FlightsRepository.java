package com.example.airlines.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.airlines.entity.Flights;
import com.example.airlines.entity.UserInfo;

@Repository
public interface FlightsRepository extends PagingAndSortingRepository<Flights, Integer> {
	
//	Optional<Flights> findByUsername(String username);
	
	@Query(value = "SELECT * FROM FLIGHTS WHERE origin = ?1 AND destination = ?2 AND schedule LIKE %?3% AND price BETWEEN ?4 AND ?5", nativeQuery = true)
	Page<Flights> findSome(String origin, String destination, int day, int min_price, int max_price, Pageable pageable);
	

}
