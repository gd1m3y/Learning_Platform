package com.psl.training.service;

import java.util.List;

import com.psl.training.model.UserLoginCredential;
import com.psl.training.model.User;

public interface UserService {
	public void addUser(User user);

	public User authenticateUser(UserLoginCredential credentials);
	
	public void updateUser(User user);

	public User getUserById(int id);

	public void deleteUser(int id);

	public List<User> getAllUser();

}
