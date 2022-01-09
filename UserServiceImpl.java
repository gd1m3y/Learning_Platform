package com.psl.training.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.psl.training.exception.ApplicationException;
import com.psl.training.model.User;
import com.psl.training.model.UserLoginCredential;
import com.psl.training.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	public void addUser(User user) {
		if (repository.getUsersByEmail(user.getEmail()).size() > 0)
			throw new ApplicationException("User with email: " + user.getEmail() + " already exists.");
		repository.save(user);

	}

	@Override
	public User authenticateUser(UserLoginCredential credentials) {
		// TODO Auto-generated method stub
		return repository.authenticateUser(credentials.getEmail(), credentials.getPassword()).get(0);
	}

	@Override
	public void updateUser(User user) {
		User u = repository.getById(user.getId());
		if (Objects.nonNull(u)) {
			u.setUserName(user.getUserName());
			u.setEmail(user.getEmail());
			u.setPassword(user.getPassword());
			repository.save(u);
		}
	}

	@Override
	public User getUserById(int id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public void deleteUser(int id) {
		repository.deleteById(id);
	}

	@Override
	public List<User> getAllUser() {
		return repository.findAll();
	}

}
