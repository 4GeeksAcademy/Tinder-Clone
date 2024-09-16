from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()
  
class Gender(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(120), nullable = False)
  def __repr__(self):
    return f'<Gender {self.name}>'


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
  price = db.Column(db.Integer, nullable = False)
  duration_in_days = db.Column(db.Integer, nullable = False)
  description = db.Column(db.String(120), nullable = False)
  
  def __repr__(self):
    return f'<Subscription {self.name}>'
  
  def serialize(self):
    return {
      "id": self.id,
      "name": self.name,
      "price": self.price,
      "duration_in_days": self.duration_in_days,
      "description": self.description
    }
  

class User(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(120), nullable = True)
  email = db.Column(db.String(120), unique=True, nullable=True)
  password = db.Column(db.String(120), nullable=True)
  country = db.Column(db.String(80), nullable=True)
  age = db.Column(db.String(80), nullable=True)
  gender_id = db.Column(db.Integer, db.ForeignKey('gender.id'), nullable=True)
  gender_to_show_id = db.Column(db.Integer, db.ForeignKey('gender.id'), nullable=True)
  subscription_id = db.Column(db.Integer, db.ForeignKey('subscription.id'), nullable=True)
  role = db.Column(db.String(120), nullable=False)
  image = db.Column(db.LargeBinary, nullable = True)

  #relationship
  gender = db.relationship('Gender', foreign_keys=[gender_id])
  gender_to_show = db.relationship('Gender', foreign_keys=[gender_to_show_id])
  subscription = db.relationship('Subscription', backref = 'users')

  def __repr__(self):
    return f'<User {self.id}>'

  def serialize(self):
    return {
        "id": self.id,
        "name": self.name,
        "email": self.email,
        "password": self.password,
        "country": self.country,
        "age": self.age,
        "gender": self.gender.name if self.gender else None,
        "gender_to_show": self.gender_to_show.name if self.gender_to_show else None,
        "subscription": self.subscription.name if self.subscription else None,
        "role": self.role
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