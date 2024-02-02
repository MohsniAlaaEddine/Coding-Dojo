package com.codingdojo.Dojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Dojo.models.Dojo;
import com.codingdojo.Dojo.repositories.DojoRepository;

@Service
public class DojoService {
	
	@Autowired
	private DojoRepository dojoServ;
	
	public List<Dojo> allDojo(){
		return dojoServ.findAll();
	}
	
	public Dojo createDojo(Dojo d) {
		return dojoServ.save(d);
	}

	 public Dojo findDojo(Long id) {
	        Optional<Dojo> optionalDojo = dojoServ.findById(id);
	        if(optionalDojo.isPresent()) {
	            return optionalDojo.get();
	        } else {
	            return null;
	        }
	    }
}
