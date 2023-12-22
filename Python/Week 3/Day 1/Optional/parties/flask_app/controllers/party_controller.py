from flask_app import app
from flask import render_template,session,redirect,request,flash
from flask_app.models.party_model import Party

# -----display route------
@app.route('/parties/new')
def new_party():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('new_party.html')

# -------action route-------
@app.route('/parties/create',methods=['POST'])
def create():
    if Party.validate(request.form):
        data={**request.form,"user_id":int(session['user_id'])}
        print("🦋🦋🦋🦋🦋🦋🦋🦋",data,"🦋🦋🦋🦋🦋🦋🦋🦋")
        db_return=Party.create(data)
        print(db_return)
        return redirect('/dashboard')
    return redirect ('/partys/new')

