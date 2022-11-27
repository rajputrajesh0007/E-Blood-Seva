package com.team.bloodseva.dao;

import java.util.WeakHashMap;

import org.springframework.stereotype.Repository;

import com.team.bloodseva.modal.UserModal;

@Repository
public interface UserDao {

	@SuppressWarnings("rawtypes")
	WeakHashMap registerUser(UserModal userModal);

	@SuppressWarnings("rawtypes")
	WeakHashMap loginUser(UserModal userModal);

}
