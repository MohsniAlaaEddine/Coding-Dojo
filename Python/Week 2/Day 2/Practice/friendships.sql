SELECT * FROM frienships.users;
INSERT INTO users (first_name,last_name)
VALUES ('Alaa','Mohsni'),
       ('Khairy','Sou'),
       ('Anis','Lagh'),
       ('Aziz','A'),
       ('Allela','B'),
       ('Sameh','S');
SELECT * FROM friendships;
INSERT INTO friendships (user_id,friend_id)
VALUES (1,2),
	    (1,4),
        (1,6);
INSERT INTO friendships (user_id,friend_id)
VALUES (2,1),
	    (2,3),
        (2,5);
INSERT INTO friendships (user_id,friend_id)
VALUES (3,2),
	    (3,5);
INSERT INTO friendships (user_id,friend_id)
VALUES (4,3);  
INSERT INTO friendships (user_id,friend_id)
VALUES (5,1),
	    (5,6);
 INSERT INTO friendships (user_id,friend_id)
VALUES (6,2),
	    (6,3);
SELECT users.first_name,users.last_name,users2.first_name as friend_first_name,users2.last_name as friend_last_name FROM users
JOIN friendships
ON users.id=friendships.user_id
LEFT JOIN users as users2 ON users2.id=friendships.friend_id;

SELECT users.first_name,users.last_name,users2.first_name as friend_first_name,users2.last_name as friend_last_name FROM users
JOIN friendships
ON users.id=friendships.user_id
LEFT JOIN users as users2 ON users2.id=friendships.friend_id
WHERE users.id=1;


        
        
        
     
        
        
        
        
        
        
       