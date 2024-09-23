import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SubscriptionLevelFree = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='sub-lvl border border-1 rounded-4 fs-6 p-3 justify-content-center'>
            
                <h2 className="card-lvl-title">Clipped</h2>
            
            <ul className='text-start lh-base card-lvl-body'>
                <li>50 likes por día</li>
                <li>Acceso a cualquier ubicación del Perú</li>     
                <li>Haz match</li>
                <li>Publicidad al mínimo</li>  
                <button 
                onClick={handleClick}
                className="busco-option mb-3"
            >Crear una cuenta</button>   
            </ul>
        </div>
    );
};
