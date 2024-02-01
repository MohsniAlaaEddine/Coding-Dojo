package com.codingdojo.AllBooks.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.AllBooks.models.Book;
import com.codingdojo.AllBooks.services.BookService;

@Controller
@RequestMapping("/books")
public class BookController {
	
	private final BookService bookService;
	
    public BookController(BookService bookService){
        this.bookService = bookService;
}

    @GetMapping("")
    public String getAllBook(Model model){
    	
    	List<Book> books=bookService.allBooks();
    	model.addAttribute("books",books);
    	return "home.jsp";
    }
    
    @PostMapping("/new")
    public String createBook(@RequestParam(value = "title") String title, 
			@RequestParam(value = "description") String description,
			@RequestParam(value = "language") String language, 
			@RequestParam(value = "numOfPages") Integer numOfPages) {
    	Book newBook = new Book(title, description, language, numOfPages );
		bookService.createBook(newBook);
    	return"redirect:/books";
    }
    @GetMapping("/{id}")
    public String findBook(@PathVariable("id") Long id,Model model) {
    	Book selectedBook = bookService.findBook(id);
    	model.addAttribute("book",selectedBook);
    	return "showOne.jsp";
    	
    }

}
