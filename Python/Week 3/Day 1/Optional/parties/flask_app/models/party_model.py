from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Party:
    def __init__(self,data):
        self.id=data["id"]
        self.title=data["title"]
        self.location=data["location"]
        self.date=data["date"]
        self.all_ages=data["all_ages"]
        self.user_id=data["user_id"]

    @classmethod
    def get_all (cls):
        query="SELECT * FROM parties;"
        results=connectToMySQL(DATABASE).query_db(query)    
        party=[]
        for one_party in results:
            party.append(cls(one_party))
            return party

    @classmethod
    def create(cls,data):
        query="""INSERT INTO parties
            (first_name,last_name,email,password)
            VALUES (%(title)s,%(location)s,%(date)s,%(description)s,%(user_id)s)"""
        return connectToMySQL(DATABASE).query_db(query,data)

    @classmethod
    def get_by_id(cls,data):
        query="SELECT * FROM partie WHERE id=%(id)s"
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None 
    
    @classmethod
    def get_all_by_id(cls,data):
        query="SELECT * FROM partie WHERE user_id=%(user_id)s"
        results=connectToMySQL(DATABASE).query_db(query,data)
        user_party=[]
        for row in results:
            user_party.append(cls(row))
            return user_party
    


    @classmethod
    def update(cls,data):
        query="""UPDATE parties SET title=%(title)s,location=%(location)s,date=%(date)s,all_ages=%(all_ages)s,user_id=%(user_id)s
        WHERE id=%(id)s;"""
        results=connectToMySQL(DATABASE).query_db(query,data)
        return results

    @classmethod
    def delete(cls,data):
        query="DELETE FROM parties WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query,data)

    @staticmethod
    def validate(data):
        is_valid=True
        if len(data['title'])<2:
            is_valid=False
            flash("Party title is required")
        if len(data['location'])<2:
            is_valid=False
            flash("Party location is required")
        if len(data['description'])<10:
            is_valid=False
            flash("PArty description must be at least 10")
        if len(data['date'])=="":
            is_valid=False
            flash("PArty Date must be provided")
        return is_valid
    

