import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewLoginButton = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = () => {
    console.log('Datos de inicio de sesión:', formData);
    // Aquí iría la lógica para iniciar sesión
    handleClose();
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
    }
  };

  return (
    <>
      <Button className="login-btn" onClick={handleShow} style={styles.button}>
        Iniciar sesión
      </Button>

      <Modal show={show} onHide={handleClose} contentClassName="bg-dark">
        <Modal.Header closeButton style={styles.header}>
          <Modal.Title style={styles.title}>Iniciar sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.body}>
          <Form>
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
          </Form>
        </Modal.Body>
        <Modal.Footer style={styles.footer}>
          <Button variant="primary" onClick={handleLogin} style={styles.button}>
            Iniciar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewLoginButton;