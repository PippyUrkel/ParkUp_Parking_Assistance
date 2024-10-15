import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase app
cred = credentials.Certificate('serviceKey.json')
firebase_admin.initialize_app(cred)

# Access Firestore
db = firestore.client()

