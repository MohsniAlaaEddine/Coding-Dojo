package com.codingdojo.LoginRegistration.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.LoginRegistration.models.LoginUser;
import com.codingdojo.LoginRegistration.models.User;
import com.codingdojo.LoginRegistration.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class UserController {

	@Autowired
	private UserService userServ;

	@GetMapping("")
	public String index(Model model) {

		model.addAttribute("newUser", new User());
		model.addAttribute("newLogin", new LoginUser());
		return "index.jsp";
	}

	@PostMapping("/register")
	public String register(@Valid @ModelAttribute("newUser") User newUser, BindingResult result, Model model,
			HttpSession session) {
		userServ.register(newUser, result);
		if (result.hasErrors()) {
			// Be sure to send in the empty LoginUser before
			// re-rendering the page.
			model.addAttribute("newLogin", new LoginUser());
			return "index.jsp";
		}
		session.setAttribute("user_id", newUser.getId());
		return "redirect:/welcome";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute LoginUser newLogin, BindingResult result, Model model,
			HttpSession session) {

		// Add once service is implemented:
		User user = userServ.login(newLogin, result);

		if (result.hasErrors()) {
			model.addAttribute("newUser", new User());
			return "index.jsp";
		}

		// No errors!
		// TO-DO Later: Store their ID from the DB in session,
		// in other words, log them in.
		session.setAttribute("user_id", user.getId());
		return "redirect:/welcome";
	}

	@GetMapping("/logout")
	public String logout(HttpSession s) {
		s.invalidate();
		return "redirect:/";
	}

	@GetMapping("/welcome")
	public String home(@ModelAttribute User user, Model model, HttpSession session) {
		// ROUTE GUARD
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		User user2 = userServ.findUserById(userId);
		model.addAttribute(user2);
		return "welcome.jsp";
	}
}
