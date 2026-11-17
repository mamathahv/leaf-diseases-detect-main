from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    feedback_data = None

    if request.method == "POST":
        place = request.form["place"]
        rating = request.form["rating"]

        feedback_data = {
            "place": place,
            "rating": rating
        }

    return render_template("index.html", feedback=feedback_data)

if __name__ == "__main__":
    app.run(debug=True)



