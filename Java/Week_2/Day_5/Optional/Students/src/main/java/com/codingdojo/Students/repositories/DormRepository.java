package com.codingdojo.Students.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.Students.models.Dorm;

public interface DormRepository extends CrudRepository<Dorm, Long> {

	List<Dorm> findAll();
}
