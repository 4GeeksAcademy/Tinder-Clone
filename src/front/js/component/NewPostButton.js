import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const NewPostButton = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    dni: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: ''
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

  const handlePublish = () => {
    console.log('Datos del formulario:', formData);
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
      <Button className="create-home-btn home-btn" onClick={handleShow}>
        Crear una cuenta
      </Button>

      <Modal show={show} onHide={handleClose} contentClassName="bg-dark">
        <Modal.Header closeButton style={styles.header}>
          <Modal.Title style={styles.title}>Crear una cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body style={styles.body}>
          <Form>
            <Form.Group className="mb-3" controlId="formDni" style={styles.formGroup}>
              <Form.Label style={styles.label}>DNI (8 dígitos)</Form.Label>
              <Form.Control
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleInputChange}
                maxLength="8"
                pattern="\d{8}"
                style={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNombres" style={styles.formGroup}>
              <Form.Label style={styles.label}>Nombres</Form.Label>
              <Form.Control
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleInputChange}
                style={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formApellidoPaterno" style={styles.formGroup}>
              <Form.Label style={styles.label}>Apellido Paterno</Form.Label>
              <Form.Control
                type="text"
                name="apellidoPaterno"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
                style={styles.input}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formApellidoMaterno" style={styles.formGroup}>
              <Form.Label style={styles.label}>Apellido Materno</Form.Label>
              <Form.Control
                type="text"
                name="apellidoMaterno"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
                style={styles.input}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={styles.footer}>
          <Button variant="primary" onClick={handlePublish} style={styles.button}>
            Validar mis datos
          </Button>
          {/* si esta validado ira a /register  */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewPostButton;