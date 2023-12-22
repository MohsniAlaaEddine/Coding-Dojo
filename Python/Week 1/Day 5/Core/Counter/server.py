from flask import Flask, render_template, session, redirect
app = Flask(__name__)
app.secret_key = "it's a secret"

@app.route('/page')
def page():
    if not 'count' in session:
        session["count"]=1
    return render_template('index.html')
@app.route('/click')
def count():
    session["count"]+=1
    return redirect('/page')
@app.route ('/clear')
def clear():
    session.clear()
    return redirect('/page')

if __name__=="__main__":
    app.run(debug=True)

