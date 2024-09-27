import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SubscriptionLevelGold = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/pricing');
    };

    return (
        <div className='sub-lvl border border-1 rounded-4 fs-6 p-3 justify-content-center'>
            <h2 className="card-lvl-title">Premium</h2>
            <ul className='text-start card-lvl-body'>
                <li>Descubre a quién le gustas</li>
                <li>Nuevos Top</li>
                <li>Super Likes semanales</li>
                <li>1 Boost gratis al mes</li>
                <li>¡Adicional los beneficios beneficios de Clipped free</li>
                <button 
                onClick={handleClick}
                className="busco-option mb-3"
            >
                Suscribete a Level Gold
            </button>
            </ul>
        </div>
    );
};