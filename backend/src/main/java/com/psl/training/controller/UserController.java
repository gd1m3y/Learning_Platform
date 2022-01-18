package com.psl.training.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.psl.training.exception.ApplicationException;
import com.psl.training.model.User;
import com.psl.training.model.UserLoginCredential;
import com.psl.training.security.PassEncTech;
import com.psl.training.service.UserService;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;

	@PostMapping("/authenticate")
	@ResponseBody
	public User authenticateUser(@RequestBody UserLoginCredential credentials) throws NoSuchAlgorithmException {
		credentials.setPassword(PassEncTech.toHex(credentials.getPassword()));
		System.out.println(credentials);
		try {
			return service.authenticateUser(credentials);
		}
		catch(Exception e){
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		
	}

	@PostMapping("/register")
	public String addUser(@RequestBody User user) throws NoSuchAlgorithmException {
		try {
			user.setPassword(PassEncTech.toHex(user.getPassword()));
			System.out.println("i was called");
			service.addUser(user);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return "User Added Successfully";
	}

	@PutMapping("/update")
	public String updateUser(@RequestBody User user) throws NoSuchAlgorithmException {
		try {
			if (Objects.nonNull(user.getPassword()) && !StringUtils.isEmpty(user.getPassword()))
				user.setPassword(PassEncTech.toHex(user.getPassword()));
			service.updateUser(user);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return "User Updated Successfully";
	}

	@DeleteMapping("/delete")
	public String deleteUser(@RequestParam int id) {
		try {
			service.deleteUser(id);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return "User with id: " + id + " Deleted Successfully";
	}

	@GetMapping("/view")
	@ResponseBody
	public User getUser(@RequestParam int id) {
		try {
			return service.getUserById(id);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/viewAll")
	@ResponseBody
	public List<User> getAllUser() {
		return service.getAllUser();
	}
}
