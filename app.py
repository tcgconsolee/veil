import os
from flask import Flask, render_template, redirect, url_for, request
from flask_login import LoginManager, UserMixin, login_user, current_user
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.secret_key = 'kevin2009' 
app.config['SESSION_TYPE'] = 'filesystem' 

db = SQLAlchemy(app)

class Users(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), unique=True, nullable=False)
    password = db.Column(db.String(250), nullable=False)
    location = db.Column(db.String(250), nullable=False)
    aw = db.Column(db.String(250), nullable=False)
    ms = db.Column(db.String(250), nullable=False)
    sa = db.Column(db.String(250), nullable=False)


login_manager = LoginManager(app)

app.app_context().push()
with app.app_context():
    db.drop_all()
    db.create_all()

@app.route('/')
@app.route('/index')
def index():
    username = request.args.get('username')
    if not username and current_user.is_authenticated:
        return redirect("/?username="+ current_user.username + "&aw="+ current_user.aw + "&ms=" + current_user.ms + "&sa=" + current_user.sa)
    return render_template('index.html')

@app.route('/game')
def game():
    username = request.args.get('username')
    if not username and current_user.is_authenticated:
        return redirect("/game?username="+ current_user.username + "&aw="+ current_user.aw + "&ms=" + current_user.ms + "&sa=" + current_user.sa)
    return render_template('game.html')

@app.route('/add_to_cart/<item>', methods=["POST"])
def add_to_cart(item):
    data = request.get_json() 
    quantity = data.get('quantity', 1)
    
    if item == 'aw':
        current_user.aw = str(int(current_user.aw) + quantity)
    elif item == 'sa':
        current_user.sa = str(int(current_user.sa) + quantity)
    elif item == 'ms':
        current_user.ms = str(int(current_user.ms) + quantity)

    db.session.commit()
    return '', 200

@app.route('/remove_from_cart/<item>', methods=["POST"])
def remove_from_cart(item):    
    if item == 'aw' and int(current_user.aw) > 0:
        current_user.aw = str(int(current_user.aw) - 1)
    elif item == 'sa' and int(current_user.sa) > 0:
        current_user.sa = str(int(current_user.sa) - 1)
    elif item == 'ms' and int(current_user.ms) > 0:
        current_user.ms = str(int(current_user.ms) - 1)

    db.session.commit()
    return '', 200  

@app.route('/cart')
def cart():
    aw = request.args.get('aw')
    if not aw:
        return redirect("/cart?aw=" + current_user.aw + "&ms=" + current_user.ms + "&sa=" + current_user.sa)
    return render_template("cart.html")

@app.route('/delivery')
def delivery():
    total = request.args.get('total')
    if not total:
        return redirect("/delivery?total=" + str((int(current_user.aw)*1210) + (int(current_user.ms)*1210) + (int(current_user.sa)*1100)) + "&username=" + current_user.username)
    return render_template('delivery.html')


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
        if request.form.get("loc") == "":
            return render_template("sign_up.html", value = "LOCATION IS BLANK")
        user = Users(username=request.form.get("uname"),
                     password=request.form.get("psw"),
                     location=request.form.get("loc"),
                     aw="0",
                     ms="0",
                     sa="0")
    
        db.session.add(user)    
        db.session.commit()
    
    
        return redirect(url_for("login"))

    return render_template("sign_up.html", value = None)


@app.route("/login", methods=["GET", "POST"])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("index", username= current_user.username, aw=current_user.aw, ms=current_user.ms, sa=current_user.sa))


    if request.method == "POST":
        user = Users.query.filter_by(
            username=request.form.get("uname")).first()
        if not user:
            return render_template("login.html", value = request.form.get("uname"))
    
    
        if user.password == request.form.get("psw"):
            login_user(user)
            return redirect(url_for("index", username = user.username, aw = user.aw, ms = user.ms, sa = user.sa))
    return render_template("login.html")

if __name__ == "__main__":
    app.run(host ="0.0.0.0", port = 10000, debug=False)