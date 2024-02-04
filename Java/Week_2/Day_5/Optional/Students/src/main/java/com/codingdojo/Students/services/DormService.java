package com.codingdojo.Students.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import com.codingdojo.Students.models.Dorm;
import com.codingdojo.Students.repositories.DormRepository;
import com.codingdojo.Students.repositories.StudentRepository;



@Service
public class DormService {

	@Autowired
	private DormRepository dormServ;
	
	
	@Autowired
	private StudentRepository studentServ;
	
	
	public List<Dorm> allDorm(){
		return dormServ.findAll();
	}
	
	public Dorm createDorm(Dorm d) {
		return dormServ.save(d);
	}

	 public Dorm findDorm(Long id) {
	        Optional<Dorm> optionalDorm = dormServ.findById(id);
	        if(optionalDorm.isPresent()) {
	            return optionalDorm.get();
	        } else {
	            return null;
	        }
	    }
	 
	 public void deleteStudent(Long id) {
			studentServ.deleteById(id);
		}
}
