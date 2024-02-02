package com.codingdojo.Dojo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.Dojo.models.Dojo;
import com.codingdojo.Dojo.models.Ninja;
import com.codingdojo.Dojo.services.DojoService;
import com.codingdojo.Dojo.services.NinjaService;

import jakarta.validation.Valid;



@Controller
@RequestMapping("")
public class NinjaController {


	@Autowired
	private NinjaService ninjaServ;
	
	@Autowired
	private DojoService dojoServ;

	
	// Display Publisher creation form
		@GetMapping("/ninjas/new")
		public String allNinja(@ModelAttribute Ninja ninja, Model model) {
			
			List<Dojo> allDojo = dojoServ.allDojo();
			model.addAttribute("dojo", allDojo);
			return "ninja.jsp";
		}

		// create a publisher
		@PostMapping("/ninjas/processNinja")
		public String processNinja(@Valid @ModelAttribute Ninja ninja, BindingResult result, Model model) {
			if(result.hasErrors()) {
				List<Dojo> allDojo = dojoServ.allDojo();
				model.addAttribute("dojo", allDojo);
				return "ninja.jsp";
			}else {
			// save the publisher to the DB
				ninjaServ.createNinja(ninja);
			return "redirect:/ninjas/new";
		}
	}
}
