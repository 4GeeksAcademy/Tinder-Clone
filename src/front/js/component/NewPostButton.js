import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Context } from '../store/appContext';
import { Toaster, toast } from 'sonner'

const NewPostButton = () => {
  const { store, actions } = useContext(Context)
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    dni: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Inicializa navigate

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dniToVerify = {
      dni: formData.dni
    }
    const userToRegister = {
      email: formData.email,
      password: formData.password,
    }

    try {
      await actions.sendDataToVerifyIdentity(dniToVerify.dni)
      const userToVerify = store.userToVerify
      if (
        userToVerify.apellidoPaterno === formData.apellidoPaterno &&
        userToVerify.apellidoMaterno === formData.apellidoMaterno
      ) {
        const data = await actions.registerUserData(userToRegister)
        if (data && !data.error) {
          toast.success('Usuario registrado correctamente')
          handleClose()
        }
      } else {
        toast.error('Los datos ingresados no coinciden con los de la RENIEC')
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
      toast.error(error.message)
    }

  }

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
      <Toaster richColors position='top-center' />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button
    className="create-home-btn home-btn"
    style={{
      padding: '30px 60px',
      fontSize: '24px',
      height: '80px',
      borderRadius: '30px',
      backgroundColor: '#fe3c72',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    onClick={handleShow}
  >
    Crear una cuenta
  </Button>
</div>
      <Modal show={show} onHide={handleClose} contentClassName="bg-dark">
        <Toaster richColors position='top-center' />
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
            <Form.Group className="mb-3" controlId="formEmail" style={styles.formGroup}>
              <Form.Label style={styles.label}>Correo electrónico</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
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
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={styles.footer}>
          <Button variant="primary" onClick={handleSubmit} style={styles.button}>
            Validar mis datos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewPostButton;
