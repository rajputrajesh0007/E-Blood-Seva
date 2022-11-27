package com.team.bloodseva.controller;

import java.util.WeakHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.team.bloodseva.dao.UserDao;
import com.team.bloodseva.modal.UserModal;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserDao userDao;

	@SuppressWarnings("rawtypes")
	@PostMapping(path = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
	public WeakHashMap registerUser(@RequestBody UserModal userModal){
		System.out.println("in usdr ctr registerUser ");
		return userDao.registerUser(userModal);
	}
	
	@SuppressWarnings({"rawtypes"})
	@PostMapping(path = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
	public WeakHashMap loginUser(@RequestBody UserModal userModal){
		System.out.println("in user ctr loginUser ");
		return userDao.loginUser(userModal);
	}	
}
