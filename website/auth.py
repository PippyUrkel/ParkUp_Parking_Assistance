from flask import Flask, Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/login')
def base_login():  
    return render_template('login-layout.html')