package com.codingdojo.Dojo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Dojo.models.Ninja;
import com.codingdojo.Dojo.repositories.NinjaRepository;





@Service
public class NinjaService {

	@Autowired
	private NinjaRepository ninjaServ;
	
	public List<Ninja> allNinja(){
		return ninjaServ.findAll();
	}
	
	public Ninja createNinja(Ninja n) {
		return ninjaServ.save(n);
	}

}
