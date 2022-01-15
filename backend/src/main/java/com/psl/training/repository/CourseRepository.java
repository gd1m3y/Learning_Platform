package com.psl.training.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.psl.training.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

	@Query("Select c from Course c where courseName=?1")
	List<Course> getCourseByName(String courseName);
}
