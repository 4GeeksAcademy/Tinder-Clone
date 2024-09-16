"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import Gender, db, User, Payment, Subscription
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import  JWTManager, create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

bcrypt = Bcrypt()

# Gender CRUD
@api.route('/genders', methods=['POST'])
def create_gender():
    data = request.json
    new_gender = Gender(name=data['name'])
    db.session.add(new_gender)
    db.session.commit()
    return jsonify({'message': 'Gender created successfully'}), 201

@api.route('/genders', methods=['GET'])
def get_genders():
    genders = Gender.query.all()
    return jsonify([{'id': gender.id, 'name': gender.name} for gender in genders])

@api.route('/genders/<int:gender_id>', methods=['GET'])
def get_gender(gender_id):
    gender = Gender.query.get_or_404(gender_id)
    return jsonify({'id': gender.id, 'name': gender.name})

@api.route('/genders/<int:gender_id>', methods=['PUT'])
def update_gender(gender_id):
    gender = Gender.query.get_or_404(gender_id)
    data = request.json
    gender.name = data.get('name', gender.name)
    db.session.commit()
    return jsonify({'message': 'Gender updated successfully'})

@api.route('/genders/<int:gender_id>', methods=['DELETE'])
def delete_gender(gender_id):
    gender = Gender.query.get_or_404(gender_id)
    db.session.delete(gender)
    db.session.commit()
    return jsonify({'message': 'Gender deleted successfully'})

# Payment CRUD
@api.route('/payments', methods=['POST'])
def create_payment():
    data = request.json
    new_payment = Payment(
        user_id=data['user_id'],
        payment_id=data['payment_id'],
        amount=data['amount'],
        currency=data.get('currency'),
        payment_date=datetime.fromisoformat(data['payment_date']),
        payment_status=data.get('payment_status', 'pending'),
        payment_method=data['payment_method']
    )
    db.session.add(new_payment)
    db.session.commit()
    return jsonify({'message': 'Payment created successfully'}), 201

@api.route('/payments', methods=['GET'])
def get_payments():
    payments = Payment.query.all()
    return jsonify([payment.serialize() for payment in payments])

@api.route('/payments/<int:payment_id>', methods=['GET'])
def get_payment(payment_id):
    payment = Payment.query.get_or_404(payment_id)
    return jsonify(payment.serialize())

@api.route('/payments/<int:payment_id>', methods=['PUT'])
def update_payment(payment_id):
    payment = Payment.query.get_or_404(payment_id)
    data = request.json
    payment.payment_status = data.get('payment_status', payment.payment_status)
    db.session.commit()
    return jsonify({'message': 'Payment updated successfully'})

@api.route('/payments/<int:payment_id>', methods=['DELETE'])
def delete_payment(payment_id):
    payment = Payment.query.get_or_404(payment_id)
    db.session.delete(payment)
    db.session.commit()
    return jsonify({'message': 'Payment deleted successfully'})

# Subscription CRUD
@api.route('/subscriptions', methods=['POST'])
def create_subscription():
    data = request.json
    new_subscription = Subscription(
        name=data['name'],
        price=data['price'],
        duration_in_days=data['duration_in_days'],
        description=data['description']
    )
    db.session.add(new_subscription)
    db.session.commit()
    return jsonify({'message': 'Subscription created successfully'}), 201

@api.route('/subscriptions', methods=['GET'])
def get_subscriptions():
    subscriptions = Subscription.query.all()
    return jsonify([subscription.serialize() for subscription in subscriptions])

@api.route('/subscriptions/<int:subscription_id>', methods=['GET'])
def get_subscription(subscription_id):
    subscription = Subscription.query.get_or_404(subscription_id)
    return jsonify(subscription.serialize())

@api.route('/subscriptions/<int:subscription_id>', methods=['PUT'])
def update_subscription(subscription_id):
    subscription = Subscription.query.get_or_404(subscription_id)
    data = request.json
    subscription.name = data.get('name', subscription.name)
    subscription.price = data.get('price', subscription.price)
    subscription.duration_in_days = data.get('duration_in_days', subscription.duration_in_days)
    subscription.description = data.get('description', subscription.description)
    db.session.commit()
    return jsonify({'message': 'Subscription updated successfully'})

@api.route('/subscriptions/<int:subscription_id>', methods=['DELETE'])
def delete_subscription(subscription_id):
    subscription = Subscription.query.get_or_404(subscription_id)
    db.session.delete(subscription)
    db.session.commit()
    return jsonify({'message': 'Subscription deleted successfully'})

# User CRUD
@api.route('/users', methods=['POST'])
def create_user():
    data = request.json
    password = data.get('password')
    
    print("Password:", password)  # Imprime el valor de password
    print("Type of password:", type(password))  # Imprime el tipo de password
    
    if not password:
        return jsonify({"msg": "Password is required"}), 400
    
    # Asegúrate de que password sea una cadena
    if isinstance(password, tuple):
        password = password[0] if password else ''
    
    print("Password after check:", password)  # Imprime el valor de password después de la verificación
    print("Type of password after check:", type(password))  # Imprime el tipo de password después de la verificación
    
    hashed_password = generate_password_hash(password)
    new_user = User(
        name=data.get('name'),
        email=data.get('email'),
        password=hashed_password,
        country=data.get('country'),
        age=data.get('age'),
        gender_id=data.get('gender_id'),
        gender_to_show_id=data.get('gender_to_show_id'),
        subscription_id=data.get('subscription_id'),
        role=data.get('role')  # Cambiado de data['role'] a data.get('role')
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201
@api.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"msg": "Missing email or password"}), 400

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token, user = user.id), 200
    else:
        return jsonify({"msg": "Bad email or password"}), 401

@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users])

@api.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user.serialize())

@api.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.json
    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    user.password = data.get('password', user.password)
    user.country = data.get('country', user.country)
    user.age = data.get('age', user.age)
    user.gender_id = data.get('gender_id', user.gender_id)
    user.gender_to_show_id = data.get('gender_to_show_id', user.gender_to_show_id)
    user.subscription_id = data.get('subscription_id', user.subscription_id)
    user.role = data.get('role', user.role)
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})

@api.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'})

