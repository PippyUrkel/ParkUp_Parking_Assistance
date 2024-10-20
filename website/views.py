from flask import Flask, Blueprint, render_template, jsonify
from website.firebase import db
from config.firebase_config import firebase_config
import pyrebase
import serial

views = Blueprint('views', __name__)

SERIAL_PORT = '/dev/ttyACM0'  # Change to the correct port for your system
BAUD_RATE = 9600

# Open the serial connection
try:
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE)
except:
    print("Serial init fail")

@views.route('/')
def home():
    return render_template("landing.html")

@views.route('/status')
def status():
    try:
        if ser.in_waiting > 0:
            sensor_data = ser.readline().decode('utf-8').strip()
            print(sensor_data)
            if "Object detected" in sensor_data:
                status = "Object is near"
            else:
                status = "No object near"
        else:
            status = "No data received"

        return jsonify(sensor_status=status)
    except:
        return jsonify(sensor_status="blank")

@views.route('/add_data')
def add_data():
    doc_ref = db.collection('users').document('user_id')
    doc_ref.set({
        'name': 'Andredsouza',
        'email': 'andre@example.com'
    })
    return 'Data added!'

@views.route('/dashboard')
def dashboard():
    try: 
        if ser.in_waiting > 0:
            sensor_data = ser.readline().decode('utf-8').strip()
            print(sensor_data)
            if "Object detected" in sensor_data:
                status = "Object is near"
            else:
                status = "No object near"
        else:
            status = "No data received"
        return render_template('dashboard.html', sensor_status = status)
    except:
        return render_template('dashboard.html', sensor_status = "blank")

@views.route('/customer-dashboard')
def customer_dashboard():
    return render_template('customer_dashboard.html')

@views.route('/parking-slots')
def parking_slots():
    return render_template('parkingslots.html')