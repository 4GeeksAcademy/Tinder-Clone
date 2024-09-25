import React, { useContext } from 'react'
import { HomeLogSubLevel, RowLevel } from '../component/HomeLogSubLevel.jsx'
import { Check, Lock } from 'lucide-react';
import { Context } from '../store/appContext.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { ButtonDeleteAccount } from '../component/ButtonDeleteAccount.jsx'




export const HomeLoggedSubPremium = () => {
    const { store } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className='container-fluid'>
            <div className="row vh-100">
                <div className="ps-0 pe-0 col-md-3 col-sm-12" >
                    <div className="d-flex h-100 flex-column grid">
                      <div className="setColor">
                        <div className="profile-user" >
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
                        <div className='h-100'>
                            <div className='mt-3 text-light' >
                                <p className='text-white p-0' style={{ textAlign: 'center' }}>Profile Settings</p>
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
                <div className="col-md-6 col-sm-12 p-5 pt-3 d-flex justify-content-center" style={{ backgroundColor: '#18141c' }}>
                    <div className='overflow-scrol position-relative' style={{ scrollbarWidth: 'none' }}>
                        <HomeLogSubLevel>
                            <RowLevel toNavigate='/premium' color='#000000' title="Clipped Premium" description="Mira a quienes les gustas" />
                        </HomeLogSubLevel>
                        <div style={{ color: '#F0F2F4' }}><h3>Clipped Premium</h3></div>
                        <div className='border border-secondary mb-3'>
                            <table className="table table-borderless border-secondary align-middle sub-table text-start">
                                <thead>
                                    <tr>
                                        <th className='px-4 fs-6 fw-normal'>
                                            Tus likes al siguiente nivel.
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className='px-4 d-flex align-items-center'><Check />    <p className='ps-3 my-auto'><b>Likes ilimitados.</b></p></td></tr>
                                    <tr><td className='px-4 d-flex align-items-center'><Check />    <p className='ps-3 my-auto'><b>Descubre a quien le gustas.</b></p></td></tr>
                                    <tr><td className='px-4 d-flex align-items-center' style={{ color: '#656E7B' }}><Lock />    <p className='ps-3 my-auto'><b>Likes prioritarios</b> Tus likes se verán antes.</p></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='border border-secondary mb-3'>
                            <table className="table table-borderless border-secondary align-middle sub-table text-start">
                                <thead>
                                    <tr>
                                        <th className='px-4 fs-6 fw-normal'>
                                            Mejora de experiencia
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className='px-4 d-flex align-items-center'><Check />    <p className='ps-3 my-auto'>Retroceder cuantas veces necesites.</p></td></tr>
                                    <tr><td className='px-4 d-flex align-items-center'><Check />    <p className='ps-3 my-auto'>1 Boost gratuito al mes.</p></td></tr>
                                    <tr><td className='px-4 d-flex align-items-center'><Check />    <p className='ps-3 my-auto'>3 Super Likes gratis cada semana.</p></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='border border-secondary mb-3'>
                            <table className="table table-borderless border-secondary align-middle sub-table text-start">
                                <thead>
                                    <tr>
                                        <th className='px-4 fs-6 fw-normal'>
                                            Toma el control
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className='px-4 d-flex align-items-center'><Check /><p className='ps-3 my-auto'>Descubre a quién le gustas.</p></td></tr>
                                    <tr><td className='px-4 d-flex align-items-center'><Check /><p className='ps-3 my-auto'>Controla a quién ves.</p></td></tr>
                                    <tr><td className='px-4 d-flex align-items-center'><Check /><p className='ps-3 my-auto'>Controla quién te ve.</p></td></tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 px-3 p-4">
                    <div className='container-fluid text-light d-flex flex-column align-items-center'>
                        <div>
                            <h3 className="fw-bold">Adquiere Clipped Premium</h3>
                            <p className="m-0"> Descubre a quién le gustas</p>
                        </div>
                        <div className='mt-3'>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="1week" />
                                <label className="form-check-label" for="1week">
                                    <div className="container d-flex flex-column ps-3">
                                        <p className='fs-5'> 1 semana</p>
                                        <p className='fs-6'>50,00 PEN/semana</p>
                                    </div>
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="1month" checked />
                                <label className="form-check-label" for="1month">
                                    <div className="container d-flex flex-column ps-3">
                                        <p className='fs-5'> 1 mes</p>
                                        <p className='fs-6'>25,00 PEN/semana</p>
                                        <p>Ahorra 50%</p>
                                    </div>
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="6moths" checked />
                                <label className="form-check-label" for="6moths">
                                    <div className="container d-flex flex-column ps-3">
                                        <p className='fs-5 my-0'> 6 meses</p>
                                        <p className='fs-6 my-0'>12,50 PEN/semana</p>
                                        <p className='my-0'>Ahorra 75%</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <p className='text-start' style={{ fontSize: '0.8rem' }}>Al Continuar, se cobrará tu pago, tu suscripción se renovará por la misma duración dedl paquete al mismo precio hasta que canceles a través de los Ajustes de tu cuenta</p>
                            <button type="button" className="btn btn-warning rounded-pill fw-bold" style={{ height: '50px' }}>Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}