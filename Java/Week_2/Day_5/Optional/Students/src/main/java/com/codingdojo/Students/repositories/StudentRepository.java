package com.codingdojo.Students.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.Students.models.Student;

public interface StudentRepository extends CrudRepository<Student, Long> {

	List<Student> findAll();
}
