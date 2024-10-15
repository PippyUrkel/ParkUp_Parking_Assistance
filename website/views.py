from flask import Flask, Blueprint, render_template
from website.firebase import db
from config.firebase_config import firebase_config
import pyrebase

views = Blueprint('views', __name__)


@views.route('/')
def home():
    return render_template("landing.html")

@views.route('/add_data')
def add_data():
    doc_ref = db.collection('users').document('user_id')
    doc_ref.set({
        'name': 'Andredsouza',
        'email': 'andre@example.com'
    })
    return 'Data added!'
