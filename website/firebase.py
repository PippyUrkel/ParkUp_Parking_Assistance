import pyrebase
from config.firebase_config import firebase_config  # Import the hidden config

firebase = pyrebase.initialize_app(firebase_config)
db = firebase.database()
auth = firebase.auth()

# Example function for adding data
def add_data(path, data):
    db.child(path).set(data)
