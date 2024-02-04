package com.codingdojo.Students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.Students.models.Dorm;
import com.codingdojo.Students.models.Student;
import com.codingdojo.Students.services.DormService;
import com.codingdojo.Students.services.StudentService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("")
public class StudentController {

	@Autowired
	private StudentService studentServ;

	@Autowired
	private DormService dormServ;

	@GetMapping("/student/new")
	public String allNinja(@ModelAttribute Student student, Model model) {

		List<Dorm> allDorm = dormServ.allDorm();
		model.addAttribute("dorm", allDorm);
		return "student.jsp";
	}

	// create a publisher
	@PostMapping("/students/processStudents")
	public String processStudent(@Valid @ModelAttribute Student student, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Dorm> allDorm = dormServ.allDorm();
			model.addAttribute("dorm", allDorm);
			return "student.jsp";
		} else {
			// save the publisher to the DB
			studentServ.createStudent(student);
			return "redirect:/student/new";
		}
	}


}
