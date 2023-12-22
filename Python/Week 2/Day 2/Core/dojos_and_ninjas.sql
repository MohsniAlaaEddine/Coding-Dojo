SELECT * FROM dojo_and_ninja.dojos;
INSERT INTO dojos (name)
VALUES ('Python'),
		('MySQL'),
		('HTML');
DELETE FROM dojos WHERE id;
INSERT INTO dojos (name)
VALUES ('JS'),
		('CSS'),
		('C#');
SELECT * FROM dojo_and_ninja.ninjas;
INSERT INTO ninjas (first_name,last_name,age,dojo_id)
values('Alaa','Mohsni',23,4),
       ('Khairy','Sou',24,4),
       ('Anis','Lagh',28,4);
       
INSERT INTO ninjas (first_name,last_name,age,dojo_id)
values('Allela','Fehri',22,5),
       ('Rayen','Khmir',23,5),
       ('Sameh','Khazri',29,5);
       
INSERT INTO ninjas (first_name,last_name,age,dojo_id)
values('Tas','B',19,6),
       ('Ahmed','A',19,6),
       ('Ale','C',29,6);       
       
SELECT * FROM dojo_and_ninja.ninjas
WHERE dojo_id=4;

SELECT * FROM dojo_and_ninja.ninjas
WHERE dojo_id=6;

SELECT * FROM dojo_and_ninja.dojos
WHERE id=6;

SELECT * FROM dojos 
JOIN ninjas
ON ninjas.id = dojos.id WHERE ninjas.id=6;

SELECT * FROM dojos 
JOIN ninjas
ON ninjas.id = dojos.id;
