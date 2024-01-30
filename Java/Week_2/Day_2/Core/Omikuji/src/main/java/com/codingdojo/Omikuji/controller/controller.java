package com.codingdojo.Omikuji.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import jakarta.servlet.http.HttpSession;

@Controller
public class controller {

	@GetMapping("/omikuji")
	public String form() {
		
		return "form.jsp";
	}
	
	@PostMapping("/processForm")
	public String process(@RequestParam("cityName")String cityName,
			@RequestParam("personName")String personName,
			@RequestParam("profession")String profession,
			@RequestParam("num")String num,
			@RequestParam("living")String living,
			@RequestParam("description")String description,
			HttpSession session) {
		
		session.setAttribute("personName", personName);
		session.setAttribute("cityName", cityName);
		session.setAttribute("profession", profession);
		session.setAttribute("num", num);
		session.setAttribute("living", living);
		session.setAttribute("description", description);
		
		return "redirect:/omikuji/show";
	}
	@GetMapping("/omikuji/show")
	public String show() {
		
		return "show.jsp";
	}
}
