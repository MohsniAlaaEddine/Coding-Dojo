package com.codingdojo.Burger.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.Burger.models.Burger;

public interface BurgerRepository extends CrudRepository<Burger, Long> {

	List<Burger> findAll();
}
