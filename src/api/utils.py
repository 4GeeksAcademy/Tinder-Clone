from flask import jsonify, url_for
from flask import render_template, current_app
from flask_mail import Mail, Message
from threading import Thread
import re

class APIException(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

def generate_sitemap(app):
    links = ['/admin/']
    for rule in app.url_map.iter_rules():
        # Filter out rules we can't navigate to in a browser
        # and rules that require parameters
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            if "/admin/" not in url:
                links.append(url)

    links_html = "".join(["<li><a href='" + y + "'>" + y + "</a></li>" for y in links])
    return """
        <div style="text-align: center;">
        <img style="max-height: 80px" src='https://storage.googleapis.com/breathecode/boilerplates/rigo-baby.jpeg' />
        <h1>Rigo welcomes you to your API!!</h1>
        <p>API HOST: <script>document.write('<input style="padding: 5px; width: 300px" type="text" value="'+window.location.href+'" />');</script></p>
        <p>Start working on your project by following the <a href="https://start.4geeksacademy.com/starters/full-stack" target="_blank">Quick Start</a></p>
        <p>Remember to specify a real endpoint path like: </p>
        <ul style="text-align: left;">"""+links_html+"</ul></div>"

# send emails

def send_async_email(app, mail, msg):
    with app.app_context():
        try:
            mail.send(msg)
            print(f"Email enviado exitosamente a: {msg.recipients[0]}")
        except Exception as e:
            print(f"Error al enviar email a {msg.recipients[0]}: {str(e)}")

def send_welcome_email(user_email):
    print(f"Intentando enviar correo de bienvenida a: {user_email}")
    
    try:
        app = current_app._get_current_object()  # Obtén la instancia real de la aplicación
        mail = Mail(app)  # Asegúrate de que Mail esté importado correctamente
        
        print(f"Directorio de plantillas: {app.template_folder}")
        template_content = render_template('welcome_email.html', email=user_email)
        print(f"Contenido de la plantilla renderizada: {template_content[:100]}...")  # Primeros 100 caracteres
        
        msg = Message('Bienvenido a nuestra aplicación',
                      recipients=[user_email])
        msg.html = template_content
        
        thread = Thread(target=send_async_email, args=(app, mail, msg))
        thread.start()
        
        print(f"Proceso de envío de email iniciado para: {user_email}")
    except Exception as e:
        print(f"Error al preparar el correo de bienvenida para {user_email}: {str(e)}")
        print(f"Tipo de error: {type(e).__name__}")