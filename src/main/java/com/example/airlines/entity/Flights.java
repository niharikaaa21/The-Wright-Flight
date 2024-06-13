package com.example.airlines.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Flights")
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Flights {
	
//	- origin
//	- destination
//	- duration
//	- dept time
//	- arr time
//	- schedule
//	- distance 
//	- price
//	- delay (in mins)
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id; 
	
	@Column
	private String companyName;
	
	@Column
	private String companyLogo;
	
	@Column
	private String flightName;
	
	@Column
	private String origin;
	
	@Column
	private String destination;
	
	@Column
	private Integer duration;
	
	@Column
	private String departureTime; 

	@Column
	private String schedule;
	
	@Column
	private Integer distance;
	
	@Column
	private Integer price;    
	
	@Column
	private Integer delay;
	
	
	

}
