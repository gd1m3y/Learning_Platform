package com.psl.training.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.psl.training.exception.ApplicationException;
import com.psl.training.model.Course;
import com.psl.training.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository repository;

	@Override
	public void addCourse(Course course) {
		List<Course> courses = repository.getCourseByName(course.getCourseName());
		if (courses.size() > 0) {
			throw new ApplicationException("Course With name: " + course.getCourseName() + " already exists.");
		}
		repository.save(course);
	}

	@Override
	public void updateCourse(Course course) {
		Course c = getCourseById(course.getId());
		if (Objects.nonNull(c)) {
			if (Objects.nonNull(course.getCourseName()) && !StringUtils.isEmpty(course.getCourseName()))
				c.setCourseName(course.getCourseName());
			if (Objects.nonNull(course.getCourseContent()) && !StringUtils.isEmpty(course.getCourseContent()))
				c.setCourseContent(course.getCourseContent());
			repository.save(c);
		}
	}

	@Override
	public Course getCourseById(int id) {
		Course c = repository.findById(id).orElse(null);
		if (Objects.isNull(c))
			throw new ApplicationException("Course with id: " + id + " does not exists.");
		return c;
	}

	@Override
	public void deleteCourse(int id) {
		Course c = getCourseById(id);
		if (Objects.nonNull(c))
			repository.deleteById(id);
	}

	@Override
	public List<Course> getAllCourse() {
		return repository.findAll();
	}

}
