import os
from flask import Flask, render_template, redirect, url_for, request
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
db = SQLAlchemy()
 
login_manager = LoginManager(app)

class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), unique=True,
                         nullable=False)
    password = db.Column(db.String(250),
                         nullable=False)
 
 
db.init_app(app)
 
with app.app_context():
    db.create_all()

@login_manager.user_loader
def loader_user(user_id):
    return Users.query.get(user_id)

@app.route('/register', methods=["GET", "POST"])
def register():

    if request.method == "POST":
        if not db.session.query(Users).filter_by(username=request.form.get("uname")).count() < 1:
            return render_template("sign_up.html", value = "USER ALREADY EXISTS")
        if request.form.get("uname") == "":
            return render_template("sign_up.html", value = "USERNAME IS BLANK")
        if request.form.get("psw") == "":
            return render_template("sign_up.html", value = "PASSWORD IS BLANK")
        user = Users(username=request.form.get("uname"),
                     password=request.form.get("psw"))
    
        db.session.add(user)    
        db.session.commit()
    
    
        return redirect(url_for("login"))

    return render_template("sign_up.html", value ="")


@app.route("/login", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("index", logged_in = True, username = current_user.username))


    if request.method == "POST":
        user = Users.query.filter_by(
            username=request.form.get("uname")).first()
        if not user:
            return render_template("login.html", value = request.form.get("uname"))
    
    
        if user.password == request.form.get("psw"):
            login_user(user)
            return redirect(url_for("index", logged_in = True, username = user.username))
    return render_template("login.html")

@app.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.secret_key = 'kevin2009'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.run(host ="0.0.0.0", port = 10000, debug=False)
    
