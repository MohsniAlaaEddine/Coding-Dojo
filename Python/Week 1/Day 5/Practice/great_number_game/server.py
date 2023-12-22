from flask import Flask, render_template, redirect
app = Flask(__name__)
x=73
@app.route('/index')
def index():
    return render_template("index.html")
@app.route('/fct')
def fct(y):
    if (y)<x :
        result="Too low"
    elif (y)>x:
        result="Too Hight"
    else:
        result=(f"You guessed the number :{x}")
    return render_template('index.html',y=y,result=result)
    





if __name__=="__main__":
    app.run(debug=True)

