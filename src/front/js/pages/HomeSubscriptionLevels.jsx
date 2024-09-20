import React from 'react';
import { SubscriptionLevelsHeader } from '../component/SubscriptionLevelsHeader.jsx';
import { SubscriptionTable } from '../component/SubscriptionTable.jsx';
import { HomeNotLogHeader } from '../component/HomeNotLogHeader.jsx';
import NewPostButton from '../component/NewPostButton.js'
import { Instagram, Facebook, X } from 'lucide-react'
export const HomeSubscriptionLevels = () => {

    return (
        <div className="container-md d-flex flex-column px-0 mx-0" style={{ minWidth: '500px', maxWidth: '100%' }}>
            <section className="container-fluid border-bottom border-2 border-secondary px-0" style={{ backgroundColor: '#111418' }}>
                <HomeNotLogHeader isDisplayed={true} />
            </section>
            <section className='pt-5 border-bottom border-2 border-secondary' style={{ backgroundColor: "#000000" }}>
                <SubscriptionLevelsHeader />
            </section >
            <section style={{ backgroundColor: "#111418" }}>
                <SubscriptionTable />
            </section>
            <section className='w-100 pb-5' style={{ backgroundColor: "#111418" }}>
                <div className='container px-5 text-start d-flex flex-column justify-content-center'>
                    <h2 style={{ color: '#F0F2F4' }}>¿Por qué elergirnos?</h2>
                    <p style={{ color: '#A9BFC8' }}>
                        Clipped nace a raíz de una necesidad detectada, la cual es no saber si el perfil es real o falso y que puedan resultar en estafa. Nosotros con la finalidad
                        de que los usuarios se sientan seguros verificamos la identidad del usuario mediante sus respectivos documentos de identidad y lo validamos. Evita las estafas
                        usando nuestra web!
                    </p>
                    <div className='d-flex justify-content-center'><NewPostButton /></div>
                </div>
            </section>
            <section style={{backgroundColor:'#111418'}}>
                <div className="container text-start pt-5" style={{ zIndex: '2' }}>
                    <h2 style={{ color: "white" }}> REDES SOCIALES</h2>
                    <div className="container d-flex me-5" style={{ color: 'white' }}>
                        <div className="social-media">
                            <Instagram size={48} />
                        </div>
                        <div className="social-media">
                            <Facebook size={48} />
                        </div>
                        <div className="social-media">
                            <X size={48} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}