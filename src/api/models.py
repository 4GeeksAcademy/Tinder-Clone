from flask_sqlalchemy import SQLAlchemy
import base64

db = SQLAlchemy()
  
class Gender(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(120), nullable = False)
  def __repr__(self):
    return f'<Gender {self.name}>'

class Role(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(120), nullable = False)
  def __repr__(self):
    return f'<Role {self.name}>'


class Payment(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
  payment_id = db.Column(db.String(120), nullable = False) #id proportionated by the payment gateway
  amount = db.Column(db.Integer, nullable = False)
  currency = db.Column(db.String(120), nullable = True)
  payment_date = db.Column(db.DateTime, nullable = False)
  payment_status = db.Column(db.String(120), nullable = False, default = 'pending')
  payment_method = db.Column(db.String(120), nullable = False)
  
  #relationship
  user = db.relationship('User', backref = 'payments')
  
  def __repr__(self):
    return f'<Payment {Payment.id}>'
  
  def serialize(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "payment_id": self.payment_id,
      "amount": self.amount,
      "currency": self.currency,
      "payment_date": self.payment_date.isoformat() if self.payment_date else None,
      "payment_status": self.payment_status,
      "payment_method": self.payment_method
    }
    
class Subscription(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(120), nullable = False)
 
  
  def __repr__(self):
    return f'<Subscription {self.name}>'
  
  def serialize(self):
    return {
      "id": self.id,
      "name": self.name,
    }
  

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(120), nullable = True)
  email = db.Column(db.String(120), unique=True, nullable=True)
  password = db.Column(db.String(255), nullable=True)
  is_premium = db.Column(db.Boolean, default = False)
  country = db.Column(db.String(80), nullable=True)
  age = db.Column(db.String(80), nullable=True)
  gender_id = db.Column(db.Integer, db.ForeignKey('gender.id'), nullable=True)
  gender_to_show_id = db.Column(db.Integer, db.ForeignKey('gender.id'), nullable=True)
  subscription_id = db.Column(db.Integer, db.ForeignKey('subscription.id'), nullable=True)
  role_id = db.Column(db.Integer, db.ForeignKey('role.id') ,nullable=True)
  image = db.Column(db.String(255), nullable=True)
  preferences_set = db.Column(db.Boolean, default = False)
  instagram = db.Column(db.String(255), nullable=True)
  facebook = db.Column(db.String(255), nullable=True)
  phone = db.Column(db.String(255), nullable=True)

  #relationship
  gender = db.relationship('Gender', foreign_keys=[gender_id])
  gender_to_show = db.relationship('Gender', foreign_keys=[gender_to_show_id])
  role = db.relationship('Role', foreign_keys=[role_id])
  subscription = db.relationship('Subscription', backref = 'users')

  def __repr__(self):
    return f'<User {self.id}>'

  def serialize(self):
    return {
        "id": self.id,
        "name": self.name,
        "email": self.email,
        "password": self.password,
        "is_premium": self.is_premium,
        "country": self.country,
        "age": self.age,
        "gender": self.gender.name if self.gender else None,
        "gender_to_show": self.gender_to_show.name if self.gender_to_show else None,
        "subscription": self.subscription.name if self.subscription else None,
        "role": self.role.name if self.role else None,
        "image": self.image,
        "preferences_set": self.preferences_set,
        "instagram": self.instagram,
        "facebook": self.facebook,
        "phone": self.phone
    }
    

class Review(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  content = db.Column(db.String(500), nullable=False)

  #relationship
  user = db.relationship('User', backref='reviews')

  def __repr__(self):
    return f'<Review {self.id}>'

  def serialize(self):
    return {
      "id": self.id,
      "user_id": self.user_id,
      "content": self.content,
    }

class Like(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user_from_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  user_to_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  timestamp = db.Column(db.DateTime, nullable = False, default = db.func.current_timestamp())
  
  # Relationship
  user_from = db.relationship('User', foreign_keys=[user_from_id], backref='likes_sent')
  user_to = db.relationship('User', foreign_keys=[user_to_id], backref='likes_received')
  
  def __repre__(self):
    return f'<Like {self.id}>'
  
  def serialize(self):
    return {
      "id": self.id,
      "user_from_id": self.user_from_id,
      "user_to_id": self.user_to_id,
      "timestamp": self.timestamp.isoformat()
    }

class Match(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  user1_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  user2_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
  timestamp = db.Column(db.DateTime, nullable = False, default = db.func.current_timestamp())
  
  #Relationship
  user1 = db.relationship('User', foreign_keys=[user1_id], backref='matches_iniciated')
  user2 = db.relationship('User', foreign_keys=[user2_id], backref='matches_received')
  
  def __repre__(self):
    return f'<Match {self.user1_id} <-> {self.user1_id}>'
  
  def serialize(self):
    return {
      "id": self.id,
      "timestamp": self.timestamp.isoformat(),
      "user1":{
        "id": self.user1.id,
        "name": self.user1.name,
        "image": self.user1.image,
        "age": self.user1.age,
        "instagram": self.user1.instagram,
        "facebook": self.user1.facebook,
        "phone": self.user1.phone
      },
      "user2":{
        "id": self.user2.id,
        "name": self.user2.name,
        "image": self.user2.image,
        "age": self.user2.age,
        "instagram": self.user2.instagram,
        "facebook": self.user2.facebook,
        "phone": self.user2.phone
      }
    }