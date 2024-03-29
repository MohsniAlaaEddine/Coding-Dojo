package com.codingdojo.AllBooks.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.AllBooks.models.Book;

public interface BookRepository extends CrudRepository<Book, Long> {

	List<Book> findAll();
}
