import React, { useState, useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { Context } from '../store/appContext'

export const Registro = () => {
  const preset_name = "Tinder-users-images"
  const cloud_name = "dsfuwxsjf"

  const [errors, setErrors] = useState({})

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getGenders()
    actions.getRoles()
  }, [])

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    fechaNacimiento: '',
    role: 0,
    sexo: 0,
    mostrarGenero: true,
    mostrar: 0,
    busco: '',
    fotos: Array(1).fill(null),
    intereses: ['Meditación', 'Spotify', 'Correr', 'Viajar', 'Freelance'],
    orientacionSexual: ['Heterosexual'],
    facebook: null,
    instagram: null,
    phone: null
  });

  const data = JSON.parse(localStorage.getItem('userDataLogin'))

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : (type === 'radio' ? value : value)
    }));
  };

  const handleBuscoChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      busco: value
    }));
  };


  const handleInteresesChange = (interes) => {
    setFormData(prevState => ({
      ...prevState,
      intereses: prevState.intereses.includes(interes)
        ? prevState.intereses.filter(i => i !== interes)
        : [...prevState.intereses, interes]
    }));
  };

  const handleOrientacionSexualChange = (orientacion) => {
    setFormData(prevState => {
      const updatedOrientaciones = prevState.orientacionSexual.includes(orientacion)
        ? prevState.orientacionSexual.filter(o => o !== orientacion)
        : [...prevState.orientacionSexual, orientacion].slice(0, 3);
      return { ...prevState, orientacionSexual: updatedOrientaciones };
    });
  };

  //This function is used to upload images to Cloudinary
  const setImages = async (e, index) => {
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', preset_name) 
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, { 
        method: 'POST',
        body: data
      });
      const file = await res.json();
      console.log(file.secure_url);

      setFormData(prevState => {
        const updatedFotos = [...prevState.fotos];
        updatedFotos[index] = file.secure_url;
        return { ...prevState, fotos: updatedFotos };
      });
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es obligatorio';
    if (!formData.fechaNacimiento) newErrors.fechaNacimiento = 'La fecha de nacimiento es obligatoria';
    if (!formData.role) newErrors.role = 'El rol es obligatorio';
    if (!formData.sexo) newErrors.sexo = 'El sexo es obligatorio';
    if (!formData.fotos[0]) newErrors.fotos = 'La foto de perfil es obligatoria';

    const socialMediaFilled = formData.facebook || formData.instagram || formData.phone;
    if (!socialMediaFilled) {
      newErrors.facebook = 'Al menos una red social es obligatoria';
      newErrors.instagram = 'Al menos una red social es obligatoria';
      newErrors.phone = 'Al menos una red social es obligatoria';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    const formDataToSend = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      age: formData.fechaNacimiento,
      gender_id: formData.sexo,
      gender_to_show_id: formData.mostrar,
      role_id: formData.role,
      image: formData.fotos[0],
      facebook: formData.facebook,
      instagram: formData.instagram,
      phone: formData.phone,
    }

    console.log(formDataToSend)
    actions.preferencesUserData(formDataToSend, data.access_token)
    .then(data => {
      if(data && !data.error){
        navigate('/dashboard')
      }
    })
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Crear Una Cuenta</h1>
        <div className="form-group">
          <label htmlFor="name">Nombre para tu perfil</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleInputChange}
            className={errors.fechaNacimiento ? 'error' : ''}
          />
        </div>
        <div className="form-group">
          <label>Rol</label>
          <div className="radio-group">
            {store.roles?.map((option, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`role-${option.id}`}
                  name="role"
                  value={option.id}
                  checked={Number(formData.role) === option.id}
                  onChange={handleInputChange}
                  className={errors.role ? 'error' : ''}
                />
                <label htmlFor={`role-${option.id}`}>{option.name}</label>
              </React.Fragment>
            ))}
          </div>
          {errors.role && <span className="error-message">{errors.role}</span>}
        </div>
        <div className="form-group">
          <label>Sexo</label>
          <div className="radio-group">
            {store.genders?.map((option, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`sexo-${option.id}`}
                  name="sexo"
                  value={option.id}
                  checked={Number(formData.sexo) === option.id}
                  onChange={handleInputChange}
                  className={errors.sexo ? 'error' : ''}
                />
                <label htmlFor={`sexo-${option.id}`}>{option.name}</label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="mostrar-genero"
            name="mostrarGenero"
            checked={formData.mostrarGenero}
            onChange={handleInputChange}
          />
          <label htmlFor="mostrar-genero">Mostrar mi género en mi perfil</label>
        </div>
        <div className="form-group">
          <label>Muéstrame</label>
          <div className="radio-group">
            {store.genders.map((option, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`mostrar-${option.id}`}
                  name="mostrar"
                  value={option.id}
                  checked={Number(formData.mostrar) === option.id}
                  onChange={handleInputChange}
                />
                <label htmlFor={`mostrar-${option.id}`}>{option.name}</label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>En este momento busco...</label>
          <div className="busco-grid">
            {[
              { value: 'Relación', emoji: '💗' },
              { value: 'Relación, pero no me cierro', emoji: '😍' },
              { value: 'Diversión, pero no me cierro', emoji: '🥂' },
              { value: 'Diversión a corto plazo', emoji: '🎉' },
              { value: 'Hacer amigos', emoji: '👋' },
              { value: 'Lo sigo pensando', emoji: '🤔' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                className={`busco-option ${formData.busco === option.value ? 'selected' : ''}`}
                onClick={() => handleBuscoChange(option.value)}
              >
                <span className="emoji">{option.emoji}</span>
                <span>{option.value}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Foto de perfil (Agrega al menos 1 foto para continuar)</label>
          <div className="photo-grid">
            {formData.fotos.map((foto, index) => (
              <div key={index} className="photo-placeholder">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImages(e, index)}
                  id={`foto-${index}`}
                  style={{ display: 'none' }}
                />
                <label htmlFor={`foto-${index}`} style={{ width: '180px', height: '180px'  }}>
                  {foto ? <img src={foto} alt={`Foto ${index + 1}`} style={{ width: '100%', height: '100%'  }} /> : '+'}
                </label>
              </div>
            ))}
          </div>
          {errors.fotos && <span className="error-message">{errors.fotos}</span>}
        </div>
        <div className='form-group'>
            <label>Redes de contacto</label>
            <div className='social-media'>
                <input 
                  type='text' 
                  name='facebook' 
                  placeholder='Facebook'
                  value={formData.facebook || ''}
                  onChange={handleInputChange}
                  className={errors.facebook ? 'error' : ''} 
                />
                <input 
                  type='text' 
                  name='instagram' 
                  placeholder='Instagram'
                  value={formData.instagram || ''}
                  onChange={handleInputChange}
                  className={errors.instagram ? 'error' : ''} 
                />
                <input 
                  type='text' 
                  name='phone' 
                  placeholder='Teléfono'
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''} 
                />
            </div>
            {(errors.facebook || errors.instagram || errors.phone) && <span className="error-message">Al menos una método de contacto es obligatorio</span>}
        </div>        
        <button type="submit" className="submit-button">Continuar</button>
      </form>
      <style jsx="true">{`
        .container {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          max-width: 1980px !important; 
          font-family: 'Proxima Nova', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          background-color: #1f1f1f;
          color: white;
        }
        .form {
          width: 100%;
          max-width: 600px;
          padding: 20px;
        }
        h1 {
          text-align: center;
        }
        .form-group {
          margin-bottom: 15px;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="date"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #333;
          color: white;
        }
        .radio-group {
          display: flex;
          gap: 15px;
        }
        .radio-group label {
          display: inline-flex;
          align-items: center;
          padding: 5px 10px;
          border: 1px solid #ff69b4;
          border-radius: 20px;
          cursor: pointer;
        }
        .radio-group input[type="radio"] {
          display: none;
        }
        .radio-group input[type="radio"]:checked + label {
          background-color: #fe3c72;
          color: white;
        }
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        #mostrar-genero {
          accent-color: #fe3c72;
        }
        .busco-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .busco-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #333;
          color: white;
          cursor: pointer;
        }
        .busco-option.selected {
          background-color: #fe3c72;
        }
        .emoji {
          font-size: 24px;
          margin-bottom: 5px;
        }
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 15px;
        }
        .photo-placeholder {
          aspect-ratio: 1;
          border: 2px dashed #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 54px;
          color: #fe3c72;
        }
        .photo-placeholder label {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .interests-group,
        .orientation-group {
          margin-top: 15px;
        }
        .interests-options,
        .orientation-options {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }
        .interest-option,
        .orientation-option,
        .add-interest {
          padding: 5px 10px;
          border: 1px solid #ccc;
          border-radius: 20px;
          background-color: #333;
          color: white;
          cursor: pointer;
        }
        .interest-option.selected,
        .orientation-option.selected {
          background-color: #fe3c72;
        }
        .submit-button {
          width: 100%;
          padding: 10px;
          background-color: #fe3c72;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
        }
        .social-media{
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 10px;
        }
        .error {
          border-color: red !important;
        }
        .error-message{
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }
      `}</style>
    </div>
  );
};