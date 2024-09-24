import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SubscriptionLevelVip = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pricing');
    };

    return (
        <div className='sub-lvl border border-1 rounded-4 fs-6 p-3 justify-content-center'>
                <h2 className="card-lvl-title">Clipped</h2>
            <ul className='text-start card-lvl-body'>
                <li>Manda mensajes antes de hacer match.</li>
                <li>Likes priorizados.</li>
                <li>Revisa los Likes que has enviado los últimos 7 días.</li>
                <li>Sumando todos los beneficios de Clipped Gold!</li>
                <button 
                onClick={handleClick}
                className="busco-option mb-3"
            >
                Suscribete a Level Vip
            </button>
            </ul>
        </div>
    );
};