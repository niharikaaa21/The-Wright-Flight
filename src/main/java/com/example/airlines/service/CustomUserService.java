package com.example.airlines.service;


import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.airlines.entity.UserInfo;
import com.example.airlines.repositories.UserInfoRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomUserService implements UserDetailsService{
	
//	@Autowired
	private UserInfoRepository userInfoRepository;
	

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		UserInfo userInfo = userInfoRepository.findByUsername(username)		
		 		.orElseThrow(() -> new UsernameNotFoundException("Username or email not found in database"));
		
		return new CustomUser
				(userInfo.getUsername(),
						userInfo.getPassword(),
						 true, // enabled
	                        true, // accountNonExpired
	                        true, // credentialsNonExpired
	                        true, // accountNonLocked
	                        Collections.emptyList(), // no authorities
							userInfo.getId()); 
	}


}
