package com.example.airlines.repositories;


import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.airlines.entity.UserInfo;


@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
	
	Optional<UserInfo> findByUsername(String username);

}
