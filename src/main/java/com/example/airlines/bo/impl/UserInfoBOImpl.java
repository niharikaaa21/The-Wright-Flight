package com.example.airlines.bo.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.airlines.bo.UserInfoBO;
import com.example.airlines.entity.UserInfo;
import com.example.airlines.repositories.UserInfoRepository;

public class UserInfoBOImpl implements UserInfoBO{
	
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public UserInfo createUserInfo(UserInfo userInfo) {
//		return userInfoRepository.save(userInfo);
		userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
		return userInfoRepository.save(userInfo);
	}

}
