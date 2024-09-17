import React, { useState } from 'react';

export const PhoneVerificationModal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('PE +51');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41422 0.585786L12 9.17157L20.5858 0.585787C21.3668 -0.195262 22.6332 -0.195262 23.4142 0.585787C24.1953 1.36684 24.1953 2.63317 23.4142 3.41421L14.8284 12L23.4142 20.5858C24.1953 21.3668 24.1953 22.6332 23.4142 23.4142C22.6332 24.1953 21.3668 24.1953 20.5858 23.4142L12 14.8284L3.41422 23.4142C2.63317 24.1953 1.36683 24.1953 0.585786 23.4142C-0.195262 22.6332 -0.195262 21.3668 0.585786 20.5858L9.17157 12L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="white"/>
          </svg>
        </button>
        <div className="modal-header">
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className="tinder-icon">
            <path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z" fill="#FE3C72"/>
          </svg>
          <h2 id="modal-title">¿Puedes darnos tu número telefónico?</h2>
        </div>
        <div className="input-group">
          <label htmlFor="country-select">País</label>
          <select 
            id="country-select"
            value={countryCode} 
            onChange={(e) => setCountryCode(e.target.value)}
            className="country-select"
          >
            <option value="PE +51">Perú +51</option>
            <option value="ES +34">España +34</option>
            <option value="MX +52">México +52</option>
            <option value="AR +54">Argentina +54</option>
            <option value="CO +57">Colombia +57</option>
            {/* Add more country options as needed */}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="phone-input">Número de teléfono</label>
          <input
            id="phone-input"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Ingresa tu número"
            className="phone-input"
          />
        </div>
        <p className="info-text">
          Te vamos a enviar un código para verificar que realmente eres tú. Es posible que tu compañía te cobre por mensajes y datos. <a href="#" className="link">¿Qué pasa si cambias de número?</a>
        </p>
        <button className="submit-button">Siguiente</button>
      </div>
      {/* Styles remain the same */}
    </div>
  );
};

