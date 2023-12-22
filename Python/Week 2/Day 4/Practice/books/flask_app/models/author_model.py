from ..config.mysqlconnection import connectToMySQL

class User:
    def __init__(self,data):
        self.id=data['id']
        self.first_name=data['first_name']
        self.last_name=data['last_name']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
    
    @classmethod
    def get_all(cls):
        query="SELECT * FROM users;"
        users=[]
        results=connectToMySQL('books_erd').query_db(query)
        for row in results:
            users.append(cls(row))
        return users
    
    @classmethod
    def save(cls,data):
        query="INSERT INTO users(first_name,last_name) VALUES (%(first_name)s,%(last_name)s);"
        return connectToMySQL('books_erd').query_db(query,data)
    
    @classmethod
    def get_one_by_id(cls,data):
        query="SELECT * FROM users WHERE id=%(id)s;"
        result=connectToMySQL('books_erd').query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def get_by_favorite_id(cls,data):
        query="SELECT * FROM users join favorites ON users.id=favorites.user_id JOIN books ON books.id=favorites.book_id WHERE user_id=%(id)s;"
        favbooks=[]
        results=connectToMySQL('books_erd').query_db(query,data)
        for row in results:
            favbooks.append(row)
        return favbooks
    
    @classmethod
    def fava(cls,data):
        query="INSERT INTO favorites (user_id,book_id) VALUES (%(user_id)s,%(book_id)s);"
        return connectToMySQL('books_erd').query_db(query,data)
    