from flask_app import app
from flask import request ,render_template, session, redirect, flash
from flask_app.models.pokemon_model import Pokemon 
from flask_app.models import user

@app.route('/pokemon/new')
def new():
    if 'user_id' in session:
        return render_template('new.html')
    return redirect('/')

@app.route('/pokemon/create',methods=["POST"])
def create():
    if(Pokemon.validate(request.form)):
        data={
            **request.form,'user_id':session['user_id']
        }
        Pokemon.create_pokemon(data)
        return redirect('/dashboard')
    return redirect('/pokemon/new')

@app.route('/pokemons/<int:id>')
def one(id):
    if 'user_id'in session:
        p=Pokemon.get_by_id({'id':id})
        return render_template('one.html',p=p)
    return redirect('/')
