from ..config.mysqlconnection import connectToMySQL

class Movie:
    def __init__(self,data) :
        self.id=data['id']
        self.title=data['title']
        self.filmmaker_id=data['filmmaker']
        self.year=data['year']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']

    @classmethod
    def get_all(cls):
        query="SELECT * FROM movies;"  
        movies = []
        results = connectToMySQL ('filmmaker_db').query_db(query)  
        for row in results:
            movies.append(cls(row))
        return movies
    
    @classmethod
    def save(cls,data):
        query = "INSERT INTO filmmakers (title,year,filmmaker_id) VALUES (%(title)s,%(year)s,%(filmmaker_id)s);"
        return connectToMySQL ('filmmaker_db').query_db(query,data) 
        
    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM movies WHERE movies.id=(%(id)s);"
        result=connectToMySQL ('filmmaker_db').query_db(query,data)  
        return cls(result[0])
    
    @classmethod
    def get_by_filmmaker_id(cls,data):
        query ="SELECT * FROM movies WHERE filmmaker_id=%(id)s;"
        movies = []
        results = connectToMySQL ('filmmaker_db').query_db(query,data)  
        for row in results:
            movies.append(cls(row))
        return movies
    
    

    
