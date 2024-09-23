import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { HomeNotLogHeader } from '../component/HomeNotLogHeader.jsx';

export const Pricing = () => {
  const [formData, setFormData] = useState({
    documentNumber: '',
    cardholderName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});
  const [cardType, setCardType] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
    if (name === 'cardNumber') {
      detectCardType(value);
    }
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case 'documentNumber':
        newErrors.documentNumber = value.length !== 8 ? 'Debe tener exactamente 8 dígitos' : '';
        break;
      case 'cardholderName':
        const names = value.trim().split(' ');
        newErrors.cardholderName = names.length < 2 ? 'Ingrese nombre y apellido' : '';
        break;
      case 'cardNumber':
        newErrors.cardNumber = !luhn(value.replace(/\D/g, '')) ? 'Número de tarjeta inválido' : '';
        break;
      case 'month':
      case 'year':
        newErrors.expiry = validateExpiry(formData.month, formData.year);
        break;
      case 'cvv':
        newErrors.cvv = value.length !== 3 ? 'Debe tener 3 dígitos' : '';
        break;
      default:
        break;
    }
    setErrors(newErrors);
  };

  const validateExpiry = (month, year) => {
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (month === '' || year === '') return 'Ingrese mes y año';
    if (parseInt(month) < 1 || parseInt(month) > 12) return 'Mes inválido';
    if (parseInt(year) < currentYear) return 'El año debe ser mayor al actual';
    if (parseInt(year) === currentYear && parseInt(month) < currentMonth) return 'La fecha ha expirado';
    
    return '';
  };

  const luhn = (value) => {
    let sum = 0;
    let isEven = false;
    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isEven = !isEven;
    }
    return (sum % 10) === 0;
  };

  const detectCardType = (cardNumber) => {
    const cleanedNumber = cardNumber.replace(/\D/g, '');
    if (/^4/.test(cleanedNumber)) {
      setCardType('visa');
    } else if (/^5[1-5]/.test(cleanedNumber)) {
      setCardType('mastercard');
    } else if (/^3[47]/.test(cleanedNumber)) {
      setCardType('amex');
    } else {
      setCardType(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every(error => error === '');
    if (isValid) {
      console.log('Form submitted', formData);
    } else {
      console.log('Form has errors', errors);
    }
  };

  const getCardIcon = () => {
    switch (cardType) {
      case 'visa':
        return 'https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat-rounded/visa.svg';
      case 'mastercard':
        return 'https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/flat/mastercard.svg';
      case 'amex':
        return 'https://www.iconninja.com/files/620/1024/847/credit-card-american-express-shop-billing-payment-amex-icon.png';
      default:
        return null;
    }
  };

  const styles = {
    mainContainer: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1e1e1e',
    },
    contentContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    container: {
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      width: '100%',
      maxWidth: '1200px',
    },
    formContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    paymentInfo: {
      width: '48%',
    },
    planInfo: {
      width: '48%',
    },
    input: {
      backgroundColor: '#333',
      border: '1px solid #555',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      width: '100%',
      marginBottom: '15px',
      height: '36px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    cardIconContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#333',
      border: '1px solid #555',
      borderRadius: '4px',
      marginBottom: '15px',
    },
    cardIcon: {
      width: '36px',
      height: '36px',
      objectFit: 'contain',
      marginLeft: '8px',
    },
    cardInput: {
      flex: 1,
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      padding: '8px',
      height: '36px',
    },
    expiryContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    expiryInput: {
      width: '48%',
    },
    expiryInputGroup: {
      display: 'flex',
      backgroundColor: '#333',
      border: '1px solid #555',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    expiryHalf: {
      width: '50%',
      border: 'none',
      backgroundColor: 'transparent',
      color: 'white',
      padding: '8px',
      height: '36px',
    },
    expirySeparator: {
      alignSelf: 'center',
      color: 'white',
      padding: '0 4px',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginBottom: '10px',
      height: '40px',
    },
    payButton: {
      backgroundColor: '#ff4458',
      color: 'white',
    },
    paypalButton: {
      backgroundColor: 'transparent',
      border: '1px solid white',
      color: 'white',
    },
    errorText: {
      color: '#ff4458',
      fontSize: '12px',
      marginTop: '-10px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.mainContainer}>
      <header className="mb-1" style={{ position: 'sticky', top: 0, color: 'white', zIndex: 1000 }}>
        <HomeNotLogHeader isDisplayed={true}/>
      </header>

      <div style={styles.contentContainer}>
        <div style={styles.container}>
          <div style={styles.formContainer}>
            <div style={styles.paymentInfo}>
              <h2>Información de pago</h2>
              <p>Todas las transacciones son seguras y encriptadas</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label style={styles.label}>Número de documento de identidad</Form.Label>
                  <Form.Control
                    type="text"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Ingrese 8 dígitos"
                    maxLength="8"
                  />
                  {errors.documentNumber && <div style={styles.errorText}>{errors.documentNumber}</div>}
                </Form.Group>

                <Form.Group>
                  <Form.Label style={styles.label}>Nombre titular de la tarjeta</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardholderName"
                    value={formData.cardholderName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Nombre y Apellido"
                  />
                  {errors.cardholderName && <div style={styles.errorText}>{errors.cardholderName}</div>}
                </Form.Group>

                <Form.Group>
                  <Form.Label style={styles.label}>Número de tarjeta</Form.Label>
                  <div style={styles.cardIconContainer}>
                    {cardType && <img src={getCardIcon()} alt={cardType} style={styles.cardIcon} />}
                    <Form.Control
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      style={styles.cardInput}
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  {errors.cardNumber && <div style={styles.errorText}>{errors.cardNumber}</div>}
                </Form.Group>

                <div style={styles.expiryContainer}>
                  <Form.Group style={styles.expiryInput}>
                    <Form.Label style={styles.label}>MM / AA</Form.Label>
                    <div style={styles.expiryInputGroup}>
                      <Form.Control
                        type="text"
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                        style={styles.expiryHalf}
                        placeholder="MM"
                        maxLength="2"
                      />
                      <span style={styles.expirySeparator}>/</span>
                      <Form.Control
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        style={styles.expiryHalf}
                        placeholder="AA"
                        maxLength="2"
                      />
                    </div>
                    {errors.expiry && <div style={styles.errorText}>{errors.expiry}</div>}
                  </Form.Group>

                  <Form.Group style={styles.expiryInput}>
                    <Form.Label style={styles.label}>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="123"
                      maxLength="3"
                    />
                    {errors.cvv && <div style={styles.errorText}>{errors.cvv}</div>}
                  </Form.Group>
                </div>

                <Button type="submit" style={{...styles.button, ...styles.payButton}}>
                  Pagar S/ 19 soles
                </Button>

                <Button style={{...styles.button, ...styles.paypalButton}}>
                  Paypal
                </Button>

                <p style={{textAlign: 'center', fontSize: '18px'}}>
                  <span role="img" aria-label="lock">🔒</span> Pago 100% seguro, protegemos tus datos.
                </p>
              </Form>
            </div>

            <div style={styles.planInfo}>
              <h2>Level Gold</h2>
              <p>Pago mensual</p>
              <h3>Total a pagar S/ 19/mes</h3>
              <p>¿Tienes un cupón?</p>
              <h4>Lo que obtienes con el plan</h4>
              <ul>
                <li>Descubre a quién le gustas</li>
                <li>Nuevos Top</li>
                <li>Super Likes semanales</li>
                <li>1 Boost gratis al mes</li>
                <li>¡Adicional los beneficios de Clipped free!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};