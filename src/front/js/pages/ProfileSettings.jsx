import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appContext.js"
import { HomeLogSubLevel, RowLevel } from "../component/HomeLogSubLevel.jsx"
import { Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Save } from 'lucide-react';
import { ButtonDeleteAccount } from '../component/ButtonDeleteAccount.jsx'

export const ProfileSettings = () => {
  const { store, actions } = useContext(Context);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    actions.getUserProfile();
  }, [isEdit])
  const handleRegister = async (e) => {
    e.preventDefault()
    actions.putUserData(data)
  }
  const handleData = async (e) => {
    console.log(data)
    let value = e.target.value;
    let prop = e.target.name;
    setData({ ...data, [prop]: value })
  }
  const handleEdit = () => {
    setIsEdit(prev => !prev)
  }
  console.log(store.userProfile)
  return (
    <div className="app-container">
      <div style={{width: '25%'}}>
        <div className="flex-column h-100">
        <div className="setColor">
              <div className="profile-user">
                <div className="profile-user-info" onClick={() => navigate('/settings')}>
                  <img 
                      src={store.userProfile.image} 
                      alt="profile picture" 
                      className="profile-picture"
                  />
                  <span className="userName">{store.userProfile.name}</span>
                </div>
                <div>
                  <button
                    onClick={() => logOutSession()}
                    style={{
                      backgroundColor: '',
                      color: '#black',
                      border: 'none',
                      padding: '5px 10px',
                      fontSize: '10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                      float: 'right',
                    }}
                  >
                    <FontAwesomeIcon
                      icon="fa-solid fa-right-from-bracket"
                      style={{
                        fontSize: '20px',
                        
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          <div className="" style={{height: '81%'}}>
            <div className='mt-3'>
              <p style={{ textAlign: 'center' }}>Profile Settings</p>
            </div>
            <div>
              <HomeLogSubLevel>
                <RowLevel color='#111418' toNavigate='/vip' title="Clipped Vip" description="Clipped al siguiente nivel" />
              </HomeLogSubLevel>
            </div>
            <div>
              <HomeLogSubLevel>
                <RowLevel color='#111418' toNavigate='/premium' title="Clipped Premium" description="Mira a quienes les gustas" />
              </HomeLogSubLevel>
            </div>
          </div>
          <div>
            <ButtonDeleteAccount />
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="scrollable-card">
          {!isEdit ?
            <div className="user-profile-card" style={{
              maxWidth: '500px',
              maxHeight: '600px',
              overflowY: 'auto',
              borderRadius: '10px',
              border: '1px solid #ccc',
              padding: '20px'
            }}>
              <img src={store?.userProfile?.image} alt="Profile picture" style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '250px',
                borderRadius: '10px',
                marginBottom: '20px'
              }} />
              <div className="user-info">
                <div className='user-basic' style={{
                  borderBottom: '1px solid #ddd',
                  paddingBottom: '20px'
                }}>
                  <div className="d-flex justify-content-center">
                    <h3 className='mb-0 d-flex w-100 justify-content-center align-items-center'>
                      {store?.userProfile?.name}, {store?.userProfile?.age}
                    </h3>
                    <div className='d-flex alignt-items-center justify-content-end' onClick={handleEdit}><Pencil /></div>
                  </div>
                </div>
                <div className='user-description' style={{
                  borderBottom: '1px solid #ddd',
                  paddingBottom: '10px'
                }}>
                  <p>
                    Rol:  {store?.userProfile?.role}
                  </p>
                </div>
                <div className='user-interests' style={{
                  paddingBottom: '20px',
                  borderBottom: '1px solid #ddd',
                }}>
                  <p>
                    Me identifico como: {store?.userProfile?.gender}
                  </p>
                </div>
                <div className='user-interests' style={{

                  paddingBottom: '20px'
                }}>
                  <p>
                    Me interesa conocer : {store?.userProfile?.gender_to_show}
                  </p>
                </div>
              </div>
            </div> :
            <div className="user-profile-card" style={{
              maxWidth: '500px',
              maxHeight: '600px',
              overflowY: 'auto',
              borderRadius: '10px',
              border: '1px solid #ccc',
              padding: '20px'
            }}>
              <img src={store?.userProfile?.image} alt="Profile picture" style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '250px',
                borderRadius: '10px',
                marginBottom: '20px'
              }} />
              <div className="user-info">
                <form onSubmit={handleRegister}>
                  <div className='user-basic' style={{
                    borderBottom: '1px solid #ddd', // add a thin gray line
                    paddingBottom: '20px' // add some padding to the bottom
                  }}>
                    <div className="d-flex justify-content-center">
                      <div className="mb-3">
                        <label for="regName" className="form-label">Name</label>
                        <input defaultValue={store?.userProfile?.name} name="name" type="text" className="form-control" id="regName" onChange={handleData} style={{ width: "100%" }} />
                      </div>
                      <div className="mb-3">
                        <label for="regAge" className="form-label">Age</label>
                        <input defaultValue={store?.userProfile?.age} name="age" type="text" className="form-control" id="regAge" onChange={handleData} />
                      </div>
                    </div>
                  </div>
                  <div className='user-description' style={{
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '10px'
                  }}>
                    <p>
                      Rol:  {store?.userProfile?.role}
                    </p>
                  </div>
                  <div className='user-interests' style={{
                    paddingBottom: '20px',
                    borderBottom: '1px solid #ddd'
                  }}>
                    <div className="mb-3">
                      <label for="regGender" className="form-label">Me identifico como</label>
                      <input defaultValue={store?.userProfile?.gender} name="gender" type="text" className="form-control" id="regGender" onChange={handleData} />
                    </div>
                  </div>
                  <div className='user-interests' style={{
                    paddingBottom: '20px'
                  }}>
                    <div className="mb-3">
                      <label for="regGenderToShow" className="form-label">Me interesa conocer</label>
                      <input defaultValue={store?.userProfile?.gender_to_show} name="gender_to_show" type="text" className="form-control" id="regGenderToShow" onChange={handleData} />
                    </div>
                    <div className="container d-flex justify-content-center">
                      <button onClick={() => { navigate('/settings'); setIsEdit(false) }} type="button" className="btn btn-primary me-3" style={{ minWidth: "80px", background: 'linear-gradient(90deg, #FF2B77, #FF5941)' }}>
                        <i className="fa-solid fa-person-walking-arrow-loop-left pe-1" /></button>
                      <button type="submit" className="btn btn-primary" style={{ minWidth: "80px", background: 'linear-gradient(90deg, #FF2B77, #FF5941)' }}><Save /></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
}
