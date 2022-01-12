package com.psl.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.psl.training.model.Course;
import com.psl.training.service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {
	@Autowired
	private CourseService service;

	@PostMapping("/add")
	@ResponseBody
	public String addCourse(@RequestBody Course course) {
		try {
			service.addCourse(course);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return "Course Added Successfully";
	}

	@PutMapping("/update")
	public String updateCourse(@RequestBody Course course) {
		try {
			service.updateCourse(course);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return "Course Updated Successfully";
	}

	@DeleteMapping("/delete")
	public String deleteUser(@RequestParam int id) {
		try {
			service.deleteCourse(id);
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return "Course with id: " + id + " Deleted Successfully";

	}

	@GetMapping("/view")
	@ResponseBody
	public Course getUser(@RequestParam int id) {
		try {
			Course course = service.getCourseById(id);
			return course;
		} catch (ApplicationException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

	}

	@GetMapping("/viewAll")
	@ResponseBody
	public List<Course> getAllCourse() {
		return service.getAllCourse();
	}

}
