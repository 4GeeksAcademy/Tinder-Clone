import React, { useState } from 'react';
import { HomeNotLogHeader } from '../component/HomeNotLogHeader.jsx';
import { Form, Button, Alert } from 'react-bootstrap';

export const Pricing = () => {
  const [formData, setFormData] = useState({
    documentNumber: '',
    cardholderName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case 'documentNumber':
        newErrors.documentNumber = value.length !== 8 ? 'Debe tener 8 dígitos' : '';
        break;
      case 'cardholderName':
        newErrors.cardholderName = value.trim().split(' ').length < 2 ? 'Ingrese nombre y apellido' : '';
        break;
      case 'cardNumber':
        newErrors.cardNumber = !luhn(value.replace(/\D/g, '')) ? 'El número de tarjeta no es válido' : '';
        break;
      case 'expiry':
        const [month, year] = value.split('/');
        newErrors.expiry = !isValidExpiry(month, year) ? 'Datos errados' : '';
        break;
      case 'cvv':
        newErrors.cvv = value.length !== 3 ? 'Datos errados' : '';
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const isValidExpiry = (month, year) => {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    return (
      month > 0 && month <= 12 && 
      year >= currentYear && 
      (year > currentYear || (year == currentYear && month >= currentMonth))
    );
  };

  const luhn = (value) => {
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");
    for (let n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n), nDigit = parseInt(cDigit, 10);
      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) == 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted', formData);
  };

  return (
    <div className="container-fluid px-0">
      <HomeNotLogHeader isDisplayed={true} />
      <div className="container-fluid bg-dark text-light">
        <div className="row">
          <div className="col-md-6 p-4">
            <h2>Información de pago</h2>
            <p>Todas las transacciones son seguras y encriptadas</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Número de documento de identidad</Form.Label>
                <Form.Control
                  type="text"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.documentNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.documentNumber}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre titular de la tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleChange}
                  isInvalid={!!errors.cardholderName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cardholderName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Número de tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.cardNumber}
                />
                {errors.cardNumber && (
                  <Alert variant="danger" className="mt-2">
                    {errors.cardNumber}
                  </Alert>
                )}
              </Form.Group>

              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label>MM / AA</Form.Label>
                    <Form.Control
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      isInvalid={!!errors.expiry}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.expiry}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      isInvalid={!!errors.cvv}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cvv}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>

              <Button variant="danger" type="submit" className="w-100">
                Pagar S/ 799 PEN
              </Button>
            </Form>

            <div className="mt-3">
              <Button variant="outline-light" className="w-100">
                Paypal
              </Button>
            </div>

            <p className="text-center mt-3">
              <small>
                <i className="bi bi-lock"></i> Pago 100% seguro, protegemos tus datos.
              </small>
            </p>
          </div>

          <div className="col-md-6 p-4">
            <h2>Plan Expert</h2>
            <p>Pago anual con renovación automática cada año</p>
            <h3>Total a pagar S/ 799/año</h3>
            <p>Precio por mes S/ 67</p>
            <p>¿Tienes un cupón?</p>
            <h4>Lo que obtienes con el plan</h4>
            <ul>
              <li>Eventos exclusivos como la Platzi Conf</li>
              <li>Más de 1500 cursos y 17 escuelas</li>
              <li>Certificados digitales</li>
              <li>Certificados físicos para rutas de perfil profesional</li>
              <li>English Academy, Escuela de Startups, Liderazgo y Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};