package com.codingdojo.Students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.Students.models.Dorm;
import com.codingdojo.Students.models.Student;
import com.codingdojo.Students.services.DormService;
import com.codingdojo.Students.services.StudentService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/")
public class DormController {

	@Autowired
	private DormService dormServ;

	@Autowired
	private StudentService studentServ;

	@GetMapping("/dorms")
	public String allDorm(@ModelAttribute Dorm dorm,Model model) {
		List<Dorm> allDorm = dormServ.allDorm();
		model.addAttribute("dorm",allDorm);
		return "home.jsp";
	}
	
	@GetMapping("/dorm/new")
	public String createDorm(@ModelAttribute Dorm dorm) {
		return "dorm.jsp";
	}


	@PostMapping("/dorms/processDorm")
	public String processDorm(@Valid @ModelAttribute Dorm dorm, BindingResult result) {
		if (result.hasErrors()) {
			return "dorm.jsp";
		} else {
			// save the publisher to the DB
			dormServ.createDorm(dorm);
			return "redirect:/dorm/new";
		}
	}

	@GetMapping("/dorm/{id}")
	public String findOneDormById(@PathVariable("id") Long id, Model model) {
		Dorm dorm = dormServ.findDorm(id);
		model.addAttribute("dorm", dorm);

		return "allStudent.jsp";
	}
	
	@DeleteMapping("/dorm/{id}")
	public String deleteStudent(@PathVariable("id") Long id,@ModelAttribute Student student,Model model) {
		List<Student> allStudent = studentServ.allStudent();
		model.addAttribute("student", allStudent);
		studentServ.deleteStudent(id);
		
		return "redirect:/dorm/{id}";
	}
}
