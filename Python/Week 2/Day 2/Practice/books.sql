SELECT * FROM books_erd.users;
INSERT INTO users (first_name,last_name)
VALUES ('Jane','Amsden'),
       ('Emily','Dixon'),
       ('Theodore','Dostoevsky'),
       ('William','Shapiro'),
       ('Lao','Xiu');
SELECT * FROM books_erd.books;
INSERT INTO books (title,num_of_pages)
VALUES ('C Sharp',250),
        ('Java',350),
        ('Python',300),
        ('PHP',200),
        ('Ruby',100);
UPDATE books 
SET title='C#' WHERE id=1;    

UPDATE users 
SET first_name='Bill' WHERE id=4;


    
   