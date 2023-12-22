from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.user_model import User

# -----display route----
@app.route('/')
def home():
    return render_template('index.html')

@app.route("/users/new", methods=['POST'])
def create():
    data={'email':request.form['email'],'first_name':request.form['first_name'],'last_name':request.form['last_name']}
    User.create(data)
    return redirect('/users')

# ------action route------
@app.route('/users')
def dashboard():
    users= User.get_all()
    return render_template('dashboard.html',users=users)