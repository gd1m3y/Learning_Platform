package com.psl.training.service;

import java.util.List;

import com.psl.training.model.Course;

public interface CourseService {
	public void addCourse(Course course);

	public void updateCourse(Course course);

	public Course getCourseById(int id);

	public void deleteCourse(int id);

	public List<Course> getAllCourse();

}
