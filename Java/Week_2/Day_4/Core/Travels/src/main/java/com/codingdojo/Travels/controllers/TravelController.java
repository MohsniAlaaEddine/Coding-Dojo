package com.codingdojo.Travels.controllers;

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

import com.codingdojo.Travels.models.Travel;
import com.codingdojo.Travels.services.TravelService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/expenses")
public class TravelController {
	@Autowired
	private TravelService travelServ;

	@GetMapping("")
	public String home(@ModelAttribute("travel") Travel travel, Model model) {
		List<Travel> allTravel = travelServ.allTravel();
		model.addAttribute("allTravel", allTravel);
		return "home.jsp";
	}

	@PostMapping("/processTravel")
	public String createTravel(@Valid @ModelAttribute("travel") Travel travel, BindingResult result, Model model) {
		if (result.hasErrors()) {
			List<Travel> allTravel = travelServ.allTravel();
			model.addAttribute("allTravel", allTravel);
			return "home.jsp";
		} else {
			Travel newTravel = travelServ.createTravel(travel);
			return "redirect:/expenses";
		}
	}
	
	@GetMapping("/{id}")
	public String findTravel(@PathVariable("id") Long id,Model model) {
		Travel travel = travelServ.findTravelById(id);
		model.addAttribute("travel", travel);
		return"showOne.jsp";
	}

	@GetMapping("/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Travel travel = travelServ.findTravelById(id);
		model.addAttribute("travel", travel);
		return "edit.jsp";
	}

	@PostMapping("/{id}")
	public String editTravel(@Valid @ModelAttribute("travel") Travel travel, BindingResult result) {
		if (result.hasErrors()) {
			return "edit.jsp";
		} else {
			travelServ.updateTravel(travel);
			return "redirect:/expenses";
		}
	}
	 @GetMapping("/goback")
	    public String goBack() {
	        return "redirect:/previousPage";
	    }
	 
	 @DeleteMapping("/{id}")
		public String deleteTravel(@PathVariable("id") Long id) {
			
		 travelServ.deleteTravel(id);
			
			return "redirect:/expenses";
		}
}
