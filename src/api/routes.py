"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import  JWTManager, create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

bcrypt = Bcrypt()

@api.route('/signup', methods=['POST'])
def singup_user():
  try:
    user_data = request.json
    existing_user = User.query.filter_by(email=user_data['email']).first()
    if existing_user:
      return jsonify({"error": "Este email ya a sido registrado"}), 409
    encrypted_password = bcrypt.generate_password_hash(user_data['password']).decode('utf-8')
    
    new_user = User(
      email = user_data['email'],
      password = encrypted_password,
      role = user_data['role']
    )
    
    db.session.add(new_user)
    db.session.commit() 
    return jsonify(new_user.serialize()), 201
  except Exception as e:
    return jsonify({"error": str(e)}), 500
