import React, { useState, useContext, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { Context } from '../store/appContext'

export const Registro = () => {
  const preset_name = "Tinder-users-images"
  const cloud_name = "dsfuwxsjf"

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getGenders()
  }, [])

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    fechaNacimiento: '',
    role: '',
    sexo: 0,
    mostrarGenero: true,
    mostrar: 0,
    busco: '',
    fotos: Array(1).fill(null),
    intereses: ['Meditación', 'Spotify', 'Correr', 'Viajar', 'Freelance'],
    orientacionSexual: ['Heterosexual']
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
    const formDataToSend = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
      age: formData.fechaNacimiento,
      gender_id: formData.sexo,
      gender_to_show_id: formData.mostrar,
      role: formData.role,
      image: formData.fotos[0]
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
          />
        </div>
        <div className="form-group">
          <label>Rol</label>
          <div className="radio-group">
            {['Sponsor', 'Finder'].map((option, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`role-${option}`}
                  name="role"
                  value={option}
                  checked={formData.role === option}
                  onChange={handleInputChange}
                />
                <label htmlFor={`role-${option}`}>{option}</label>
              </React.Fragment>
            ))}
          </div>
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
          <label>Foto de perfil (Agrega un mínimo de 2 fotos para continuar)</label>
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
                <label htmlFor={`foto-${index}`}>
                  {foto ? foto.name : '+'}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Opcional</label>
          <div className="interests-group">
            <label>Intereses</label>
            <div className="interests-options">
              {formData.intereses.map((interes) => (
                <button
                  key={interes}
                  type="button"
                  className={`interest-option ${formData.intereses.includes(interes) ? 'selected' : ''}`}
                  onClick={() => handleInteresesChange(interes)}
                >
                  {interes}
                </button>
              ))}
              <button type="button" className="add-interest">+ Agregar interés</button>
            </div>
          </div>
          <div className="orientation-group">
            <label>ORIENTACIÓN SEXUAL</label>
            <div className="orientation-options">
              {['Heterosexual', 'Gay', 'Lesbiana', 'Bisexual', 'Asexual', 'Demisexual', 'Pansexual'].map((orientacion) => (
                <button
                  key={orientacion}
                  type="button"
                  className={`orientation-option ${formData.orientacionSexual.includes(orientacion) ? 'selected' : ''}`}
                  onClick={() => handleOrientacionSexualChange(orientacion)}
                >
                  {orientacion}
                </button>
              ))}
            </div>
          </div>
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
      `}</style>
    </div>
  );
};