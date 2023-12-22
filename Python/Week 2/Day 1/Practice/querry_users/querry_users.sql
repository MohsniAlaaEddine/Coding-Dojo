SELECT * FROM users.users;
INSERT INTO users (first_name,last_name,email)
VALUES ('Alaa','Mohsni','alaa@a.com'),
       ('Anis','lagh','anis@a.com'),
        ('khairy','sou','kha@k.com');
SELECT * FROM users
WHERE email='alaa@a.com';

SELECT * FROM users
WHERE id=3;

UPDATE users
SET last_name='Pnacakes'
WHERE id=3;

DELETE FROM users WHERE id=2;

SELECT first_name FROM users
ORDER BY first_name DESC;
