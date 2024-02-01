package com.codingdojo.AllBooks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codingdojo.AllBooks.models.Book;
import com.codingdojo.AllBooks.repositories.BookRepository;

@Service
public class BookService {

	 // adding the book repository as a dependency
    private final BookRepository bookRepository;
    
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    
    public List<Book> allBooks(){
    	return bookRepository.findAll();
    }
    public Book createBook(Book b) {
    	return bookRepository.save(b);
    }
    public Book findBook(Long id) {
    	Optional<Book>book= bookRepository.findById(id);
    	if(book.isPresent()) {
    		return book.get();
    	}else {
    		return null;
    	}
    }
    
}
