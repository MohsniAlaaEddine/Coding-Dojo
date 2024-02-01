package com.codingdojo.Burger.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Burger.models.Burger;
import com.codingdojo.Burger.repositories.BurgerRepository;

@Service
public class BurgerService {
	
	@Autowired
	private BurgerRepository burgerRepo;
	

	public List<Burger> allBurgers(){
		return burgerRepo.findAll();
	}
	
	public Burger createBurger(Burger b) {
		return burgerRepo.save(b);
	}
	public Burger findBurgerById(Long id) {
		Optional<Burger> burger=burgerRepo.findById(id);
		if(burger.isPresent()) {
			return burger.get();
		}else {
			return null;
		}
	}
	
	public Burger updateBurger(Burger b) {
		return burgerRepo.save(b);
	}
	
	public void deleteBurger(Long id) {
		burgerRepo.deleteById(id);
	}

}
