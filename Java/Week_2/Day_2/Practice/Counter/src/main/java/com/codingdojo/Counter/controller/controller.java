package com.codingdojo.Counter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;

@Controller
public class controller {

	@GetMapping("/")
	public String home() {
		return "home.jsp";
	}
	
	@GetMapping("/counter")
	public String counter(HttpSession session) {
		
		if (session.getAttribute("count") == null) {
			// Use setAttribute to initialize the count in session
			session.setAttribute("count",0);
		}
			else {
			// increment the count by 1 using getAttribute and setAttribute
				session.setAttribute("count",(int)session.getAttribute("count")+1);
			}
			
		return "counter.jsp";
	}
}
