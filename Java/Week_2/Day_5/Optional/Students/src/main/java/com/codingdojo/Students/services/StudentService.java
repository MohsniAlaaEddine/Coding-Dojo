package com.codingdojo.Students.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.Students.models.Student;
import com.codingdojo.Students.repositories.StudentRepository;

@Service
public class StudentService {

	@Autowired
	private StudentRepository studentServ;

	public List<Student> allStudent() {
		return studentServ.findAll();
	}

	public Student createStudent(Student s) {
		return studentServ.save(s);
	}
	public void deleteStudent(Long id) {
		studentServ.deleteById(id);
	}


}
