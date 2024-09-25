import React from 'react';
import { HomeLogSubLevel, RowLevel } from './HomeLogSubLevel.jsx';


export const ButtonDeleteAccount = () => {

    return (
        <div className='p-3 '>
            <div className='container-fluid btn btn-outline-danger btn-lg' style={{backgroundColor: `#111418`, borderRadius: '25px', padding: '0.7rem', alignItems: 'center' }}>
                Eliminar Cuenta
            </div>
        </div>
    )
}