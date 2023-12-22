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

# * DISPLAY ROUTE - RENDER
@app.route("/users/<int:id>/edit")
def update_user(id):
    user_id_dict = {"id": id}
    user = User.get_one(user_id_dict)
    return render_template("edit.html", user=user)

#! ACTION ROUTE
@app.route("/users/update", methods=["POST"])
def process_update():
    data = {
        **request.form
    }
    User.update(data)
    return redirect("/users")

@app.route("/users/<int:id>")
def show_one(id):
    data = {"id": id}
    # user = User.get_one(data)
    return render_template("show.html", user=User.get_one(data))
@app.route('/user/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    User.destroy(data)
    return redirect('/users')
