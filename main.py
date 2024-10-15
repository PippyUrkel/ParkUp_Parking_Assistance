from website import create_app
from website.firebase import db
app = create_app()

if __name__ == "__main__":
    app.run(debug=True)