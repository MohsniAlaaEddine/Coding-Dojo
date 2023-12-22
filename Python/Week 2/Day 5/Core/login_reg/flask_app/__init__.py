# __init__.py
from flask import Flask
app = Flask(__name__)
app.secret_key = "shhhh it's secret"
DATABASE="login_and_registration"