package com.psl.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.psl.training.exception.ApplicationException;
import com.psl.training.model.User;
import com.psl.training.model.UserLoginCredential;
import com.psl.training.service.UserService;

@RestController
public class UserController {
	@Autowired
	private UserService service;

	@PostMapping("/authenticate")
	@ResponseBody
	public User authenticateUser(@RequestBody UserLoginCredential credentials) {
		return service.authenticateUser(credentials);
	}

	@PostMapping("/register")
	public String addUser(@RequestBody User user) {
		try {
			service.addUser(user);
		} catch (ApplicationException e) {
			return e.getMessage();
		}
		return "User Added Successfully";
	}

	@PutMapping("/update")
	public void updateUser(@RequestBody User user) {
		service.updateUser(user);
	}

	@DeleteMapping("/delete")
	public void deleteUser(@RequestParam int id) {
		service.deleteUser(id);
	}

	@GetMapping("/view")
	@ResponseBody
	public User getUser(@RequestParam int id) {
		User user = service.getUserById(id);
		return user;
	}

	@GetMapping("/viewAll")
	@ResponseBody
	public List<User> getAllUser() {
		return service.getAllUser();
	}
}
