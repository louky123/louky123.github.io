from cs50 import SQL 
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

db = SQL("sqlite:///books.db")

@app.route("/")
def index():
    rows = db.execute("SELECT * FROM books")
    return render_template("index.html", rows = rows)
    
@app.route("/books", methods = ["GET", "POST"])
def books():
    
    if request.method == "GET":
        rows = db.execute("SELECT * FROM books")
        return render_template("books.html", rows = rows)
    else:
        name = request.form.get("name")
        db.execute("INSERT INTO books (name) VALUES (:name)", name = name)
    
    return redirect("/books")
    
    
@app.route("/movies", methods = ["GET", "POST"])
def movies():
    
    if request.method == "GET":
        movierows = db.execute("SELECT * FROM movies")
        return render_template("movies.html", movierows = movierows)
    else:
        name = request.form.get("name")
        db.execute("INSERT INTO movies (name) VALUES (:name)", name = name)
    
    return redirect("/movies")
    
@app.route("/music", methods = ["GET", "POST"])
def music():
    
    if request.method == "GET":
        musicrows = db.execute("SELECT * FROM music")
        return render_template("music.html", musicrows = musicrows)
    else:
        name = request.form.get("name")
        db.execute("INSERT INTO music (name) VALUES (:name)", name = name)
    
    return redirect("/music")