package com.psl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.psl.training.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	// Login
	@Query("Select u from User u where email=?1 and password=?2")
	List<User> authenticateUser(String email, String password);

	@Query("Select u from User u where email=?1")
	List<User> getUsersByEmail(String email);
}
