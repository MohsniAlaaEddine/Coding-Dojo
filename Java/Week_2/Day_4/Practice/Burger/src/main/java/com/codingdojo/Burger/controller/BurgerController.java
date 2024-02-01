package com.codingdojo.Burger.controller;


import java.awt.print.Book;
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

import com.codingdojo.Burger.models.Burger;
import com.codingdojo.Burger.services.BurgerService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("")
public class BurgerController {
	
	@Autowired
	private BurgerService burgerServ;
	
	
	@GetMapping("")
	public String home(@ModelAttribute("burger") Burger burger, Model model) {
		List<Burger> allBurger=burgerServ.allBurgers();
		model.addAttribute("allBurger",allBurger);
		return"home.jsp";
	}
	
	@PostMapping("/processBurger")
	public String createBurger(@Valid @ModelAttribute("burger") Burger burger,
			BindingResult result,
			Model model) {
		if(result.hasErrors()) {
			List<Burger> allBurgers = burgerServ.allBurgers();	
			model.addAttribute("allBurgers", allBurgers);
			return "home.jsp";
			}else {
				Burger newBurger= burgerServ.createBurger(burger);
				return"redirect:/";
			}
	}
	
	@GetMapping("burgers/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model) {
		Burger burger=burgerServ.findBurgerById(id);
		model.addAttribute("burger",burger);
		return"edit.jsp";
	}
	@PostMapping("burgers/{id}")
	public String createBurger(@Valid @ModelAttribute("burger") Burger burger,
			BindingResult result) {
		if(result.hasErrors()) {
			return "edit.jsp";
			}else {
				burgerServ.updateBurger(burger);
				return"redirect:/";
			}
	}
	

}
