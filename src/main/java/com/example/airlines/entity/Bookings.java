package com.example.airlines.entity;

import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Bookings")
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Bookings {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id; 
	
	@Column
	private Integer userId;
	
	@Column(name="flight_id")
	private Integer flightId;
	
	@Column
	private String bookingDate;
	
	@Column
	private String flightDate;
	
	@Column
	private String status;
	
	@ManyToOne
	@JoinColumn(name="flight_id", insertable = false, updatable = false)
	private Flights flight;
	
}
