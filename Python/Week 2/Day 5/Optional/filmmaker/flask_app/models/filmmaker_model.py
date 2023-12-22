from ..config.mysqlconnection import connectToMySQL
class Filmmaker:
    def __init__(self,data) :
        self.name=data["name"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]

    @classmethod
    def get_all(cls):
        query="SELECT * FROM filmmakers;"    
        results=connectToMySQL('filmmakers_db').query(query)
        filmmaker=[]
        for row in results:
            filmmaker.append(cls(row))
            return filmmaker
        
    @classmethod
    def save(cls,data):
        query="INSERT INTO filmmakers (name) VALUES (%(name)s);"
        return connectToMySQL('filmmakers_db').query(query,data)
    
    @classmethod
    def get_by_id(cls,data):
        query="SELECT * FROM filmmakers WHERE id=(%(id)s);"
        result= connectToMySQL('filmmakers_db').query(query,data)
        return cls(result[0])
    
    