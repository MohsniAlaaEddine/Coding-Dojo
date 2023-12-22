from flask_app import app
from flask import render_template,redirect,request
from flask_app.models.filmmaker_model import Filmmaker

# ----display route------
@app.route('/filmmakers')
def filmmakers():
    all_fillmakers=Filmmaker.get_all
    return render_template('filmmaker.html',all_filmmaker=all_fillmakers)

#------action route------
@app.route('/create/filmaker',method=['POST'])
def create_filmmaker():
    data={"name": request.form["name"]}
    Filmmaker.save(data)
    return redirect('/filmmakers')

@app.route('/filmmaker/<int:id>')
def show_filmmaker(id):
    data={"id":id}
    return render_template('show_filmmaker.html',filmaker=Filmmaker.get_by_id(data))
