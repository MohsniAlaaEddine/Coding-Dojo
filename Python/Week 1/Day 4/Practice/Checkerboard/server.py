from flask import Flask, render_template
app = Flask(__name__)    

@app.route('/<x>/<y>/<color1>/<color2>')         
def box(x,color1,color2,y):
    
    return render_template('index.html',x=x,color1=color1,color2=color2,y=y)



if __name__=="__main__":   
    app.run(debug=True)    