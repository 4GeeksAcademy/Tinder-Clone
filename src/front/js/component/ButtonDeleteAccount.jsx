import React, { useContext } from 'react';
import { Context } from '../store/appContext.js';
export const ButtonDeleteAccount = () => {
    const {actions} = useContext(Context);
    const deleteAccountHandler = ()=>{
        actions.deleteAccount()
    }
    return (
        <div className='p-3 '>
            <div onClick={deleteAccountHandler} className='container-fluid btn btn-outline-danger btn-lg' style={{backgroundColor: `#111418`, borderRadius: '25px', padding: '0.7rem', alignItems: 'center' }}>
                Eliminar Cuenta
            </div>
        </div>
    )
}