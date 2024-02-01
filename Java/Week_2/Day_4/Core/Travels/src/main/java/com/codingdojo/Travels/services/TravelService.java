package com.codingdojo.Travels.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Travels.models.Travel;
import com.codingdojo.Travels.repositories.TravelRepository;



@Service
public class TravelService {
	@Autowired
	private TravelRepository travelRepo;
	

	public List<Travel> allTravel(){
		return travelRepo.findAll();
	}
	
	public Travel createTravel(Travel t) {
		return travelRepo.save(t);
	}
	public Travel findTravelById(Long id) {
		Optional<Travel> travel=travelRepo.findById(id);
		if(travel.isPresent()) {
			return travel.get();
		}else {
			return null;
		}
	}
	
	public Travel updateTravel(Travel t) {
		return travelRepo.save(t);
	}
	
	public void deleteTravel(Long id) {
		travelRepo.deleteById(id);
	}
	
}
