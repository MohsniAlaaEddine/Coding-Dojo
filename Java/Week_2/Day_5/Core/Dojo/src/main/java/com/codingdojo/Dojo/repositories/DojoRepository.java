package com.codingdojo.Dojo.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.Dojo.models.Dojo;

public interface DojoRepository extends CrudRepository<Dojo, Long>{
	
	List<Dojo> findAll();

}
