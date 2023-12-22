from flask_app import app
from flask import redirect,render_template,request
from flask_app.models.filmmaker_model import Filmmaker
from flask_app.models.movie_model import Movie

@app.route('/movie')
def movies():
    all_filmmakers=Filmmaker.get_all()
    all_movies=Movie.get_all()
    return render_template('movies.html',all_filmmakers=all_filmmakers,all_movies=all_movies)


@app.route('/create/movie',methods=['POST'])
def create_movie():
    data={
        "title":request.form['title'],
        "year" :request.form['year'],
        "filmmaker_id":request.form['filmmaker_id']
    }
    Movie.save(data)
    return redirect('/movies')
