package com.codingdojo.Dojo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.Dojo.models.Dojo;
import com.codingdojo.Dojo.models.Ninja;
import com.codingdojo.Dojo.services.DojoService;
import com.codingdojo.Dojo.services.NinjaService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/")
public class DojoController {

	@Autowired
	private DojoService dojoServ;

	@Autowired
	private NinjaService ninjaServ;
	
	// Display Publisher creation form
	@GetMapping("/dojos/new")
	public String allDojo(@ModelAttribute Dojo dojo) {
		return "dojo.jsp";
	}

	// create a publisher
	@PostMapping("/dojos/processDojo")
	public String processDojo(@Valid @ModelAttribute Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "dojo.jsp";
		}else {
		// save the publisher to the DB
		dojoServ.createDojo(dojo);
		return "redirect:/dojos/new";
	}
}
	@GetMapping("/dojos/{id}")
	public String findOneDojoById(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoServ.findDojo(id);
		model.addAttribute("dojo",dojo);
		
		
		return "allNinja.jsp";
	}
	
}
