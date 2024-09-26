import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { Context } from '../store/appContext';
import { Toaster, toast } from 'sonner'

const NewLoginButton = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShowLogin(true);
    setShowForgotPassword(false);
    setShow(true);
  }
    

  const [showLogin, setShowLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const handleForgotPasswordClick = () => {
    setShowLogin(false);
    setShowForgotPassword(true);
  };

  const handleForgotEmailChange = (e) => {
    setForgotEmail(e.target.value);
  };

  const handleBackToLogin = () => {
    setShowLogin(true);
    setShowForgotPassword(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const { elements } = e.currentTarget;

    const userDataLogin = {
      email: elements.namedItem('email').value,
      password: elements.namedItem('password').value,
    }
    console.log(userDataLogin)
    actions.loginUserData(userDataLogin)
      .then(data => {
        if(data && !data.error){
          const userData = JSON.parse(localStorage.getItem('userDataLogin'))
          if(userData && userData.preferences_set){
            navigate('/dashboard');
          }else{
            navigate('/preferences');
          }
        }
      })
      .catch((error) => {
        toast.error(error.message)
      })
  };

  const styles = {
    modal: {
      backgroundColor: '#1a1a1a',
      color: 'white',
    },
    header: {
      border: 'none',
      padding: '20px 20px 0',
    },
    title: {
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    body: {
      padding: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      color: '#8e8e8e',
      marginBottom: '5px',
      fontSize: '14px',
    },
    input: {
      backgroundColor: '#2c2c2c',
      color: 'white',
      border: '1px solid #444',
      borderRadius: '4px',
      padding: '10px',
      width: '100%',
    },
    footer: {
      border: 'none',
      padding: '0 20px 20px',
    },
    button: {
      backgroundColor: '#fe3c72',
      border: 'none',
      borderRadius: '20px',
      padding: '10px 20px',
      width: '100%',
      fontWeight: 'bold',
    },
    buttonSendEmail: {
      backgroundColor: '#00adb5',
      border: 'none',
      borderRadius: '20px',
      padding: '10px 20px',
      width: '100%',
      fontWeight: 'bold',
      marginBottom: '20px'
    }
  };

  return (
    <>
      <Button className="login-btn" onClick={handleShow} style={styles.button}>
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose} contentClassName="bg-dark">
        <Toaster richColors position='top-center'/>
        {showLogin && (
          <Modal.Header closeButton style={styles.header}>
            <Modal.Title style={styles.title}>Iniciar sesión</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body style={styles.body}>
          {showLogin && (
            <Form onSubmit={handleSubmitLogin}>
              <Form.Group className="mb-3" controlId="formEmail" style={styles.formGroup}>
                <Form.Label style={styles.label}>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Ingresa tu correo electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword" style={styles.formGroup}>
                <Form.Label style={styles.label}>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={styles.input}
                  placeholder="Ingresa tu contraseña"
                />
              </Form.Group>

              <p style={{ fontSize: '14px', color: '#8e8e8e', cursor: 'pointer' }} onClick={handleForgotPasswordClick}>
                ¿Olvidaste tu contraseña?
              </p>

              <Modal.Footer style={styles.footer}>
                <Button variant="primary" type='submit' style={styles.button}>
                  Iniciar sesión
                </Button>
              </Modal.Footer>
            </Form>
          )}
          {showForgotPassword && (
            <div>
              <p style={{ fontSize: '18px', color: '#8e8e8e' }}>Recupera tu contraseña</p>
              <p style={{ fontSize: '14px', color: '#8e8e8e' }}>Ingresa tu correo electrónico para recibir instrucciones de recuperación de contraseña.</p>
              <Form.Group className="mb-3" controlId="formForgotEmail" style={styles.formGroup}>
                <Form.Label style={styles.label}>Ingresa tu correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={forgotEmail}
                  onChange={handleForgotEmailChange}
                  style={styles.input}
                  placeholder="Ingresa tu correo electrónico"
                />
              </Form.Group>
              <Modal.Footer style={styles.footer}>
                <Button variant="primary" style={styles.buttonSendEmail}>
                  Recuperar contraseña
                </Button>
                <Button variant="primary" style={styles.button} onClick={handleBackToLogin}>
                  Volver a inicio de sesión
                </Button>
              </Modal.Footer>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewLoginButton;