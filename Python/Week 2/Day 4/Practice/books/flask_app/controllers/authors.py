from flask_app import app
from flask import redirect,request,render_template,url_for
from flask_app.models.author_model import User
from flask_app.models.book_model import Book




@app.route('/')
def index():
    return redirect('/users')

@app.route('/users')
def users():
    all_users=User.get_all()
    return render_template('authors.html',all_users=all_users)


@app.route('/create/user',methods=["post"])
def create_user():
    data={"first_name":request.form['first_name'],"last_name":request.form['last_name']}
    User.save(data)
    return redirect('/users')

@app.route('/users/<int:id>')
def user_details(id):
    data= {
        "id":id
    }
    return render_template('one_author.html',user=User.get_one_by_id(data),favbooks=User.get_by_favorite_id(data),all_books=Book.get_all())

@app.route('/favoriteuser/add',methods=["post"])
def favorite_user():
    data={"book_id":request.form['book_id'],"user_id":request.form['user_id']}
    User.fava(data)
    return redirect(url_for('user_details',id=data['user_id']))