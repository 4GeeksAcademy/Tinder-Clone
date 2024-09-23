import React from 'react';
import { SubscriptionLevelFree } from '../component/SubscriptionLevelFree.jsx'
import { SubscriptionLevelGold } from '../component/SubscriptionLevelGold.jsx'
import { SubscriptionLevelVip } from '../component/SubscriptionLevelVip.jsx'

export const SubscriptionLevelsHeader = () => {

    return (
        <>
            <div className='w-100 mb-5'>
                <h2 className="fw-bold fst-normal mb-4" style={{ color: '#F0F2F4' }}>Niveles de suscripción</h2>
                <p style={{ color: '#F0F2F4' }}>Pásate a Plus, Gold o Platinum para mejorar tu experiencia en Clipped.</p>
            </div>
            <div className="container-fluid d-md-flex justify-content-center w-100 mt-5 pb-4">
                <div className="row justify-content-center">
                    <div className="to-hover col-sm-7 col-md-7 col-lg-4 mb-3  px-3 d-flex justify-content-center">
                        <SubscriptionLevelFree />
                    </div>
                    <div className="to-hover col-sm-7 col-md-7 col-lg-4 mb-3 px-3  d-flex justify-content-center">
                        <SubscriptionLevelGold />
                    </div>
                    <div className="to-hover col-sm-7 col-md-7 col-lg-4 mb-3  px-3 d-flex justify-content-center">
                        <SubscriptionLevelVip />
                    </div>
                </div>
            </div>
        </>
    )
}