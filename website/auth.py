from flask import Blueprint, request, jsonify, render_template
from firebase_admin import auth
from config.firebase_config import firebase_config  # Ensure Firebase is initialized here

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def base_login():
    if request.method == 'POST':
        data = request.json
        id_token = data.get('idToken')

        try:
            # Verify the ID token
            decoded_token = auth.verify_id_token(id_token)
            uid = decoded_token['uid']
            return jsonify({'status': 'success', 'uid': uid}), 200
        except Exception as e:
            return jsonify({'status': 'error', 'message': str(e)}), 401

    return render_template('login-layout.html')
