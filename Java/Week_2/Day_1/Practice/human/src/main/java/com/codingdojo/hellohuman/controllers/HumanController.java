package com.codingdojo.hellohuman.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("")
public class HumanController {
	
//@GetMapping("")
//public String home() {
//	return"Hello Human";
//}
@GetMapping("/")
public String name(@RequestParam(value="name",required=false) String name) {
	if(name==null) {
		return "<h1>Hello Human</h1>";
	}else {		
	return"Hello "+name;
	}
}

}
