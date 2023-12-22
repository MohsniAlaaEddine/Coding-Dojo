from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Pokemon :
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.type = data['type']
        self.power = data['power']
        self.hp= data['hp']
        self.image=data['image']
        self.user_id=data['user_id']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create_pokemon(cls, data):
        query = """
        INSERT INTO pokemons (name, type, power, hp,image,user_id) 
        VALUES (%(name)s,%(type)s,%(power)s,%(hp)s,%(image)s,%(user_id)s);
        """
        return connectToMySQL(DATABASE).query_db(query, data)
    
    @classmethod
    def get_by_id(cls, data):
        query = """
        SELECT * FROM pokemons WHERE id = %(id)s;
        """
        result = connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])

        
    @classmethod
    def get_pokemon_by_user(cls,data):
        query="""SELECT * FROM pokemons
        JOIN users ON users.id=pokemons.user_id 
        WHERE users.id=%(user_id)s;"""
        result = connectToMySQL(DATABASE).query_db(query,data)
        pokemons=[]
        for pokemon in result:
            pokemons.append(cls(pokemon))
            return pokemons
        
    @classmethod
    def edit(cls,data):
        query="""
                UPDATE pokemons 
                SET name=%(name)s,type=%(type)s,power=%(power)s,hp=%(hp)s,image=%(image)s;
                """
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def delete(cls,data):
        query=""" DELETE FROM pokemons 
        WHERE id=%(id)s;
        """
        return connectToMySQL(DATABASE).query_db(query,data)


    @staticmethod
    def validate(data):
        is_valid = True
        if len(data['name'])< 2:
            flash("Name must be at least 3 ")
            is_valid = False
        if len(data['power'])< 2:
            flash("You Need Power !!!!!!!")
            is_valid = False
        if len(data['hp'])< 1:
            flash("hp too low")
            is_valid = False
        return is_valid