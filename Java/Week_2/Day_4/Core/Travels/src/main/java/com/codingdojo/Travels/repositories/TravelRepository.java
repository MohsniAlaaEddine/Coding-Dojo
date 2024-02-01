package com.codingdojo.Travels.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.Travels.models.Travel;

public interface TravelRepository extends CrudRepository<Travel, Long>{
	
	List<Travel> findAll();
}
