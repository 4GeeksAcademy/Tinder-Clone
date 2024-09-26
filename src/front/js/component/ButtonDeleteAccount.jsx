import React, { useContext } from 'react';
import { Context } from '../store/appContext.js';
import { useNavigate } from 'react-router-dom';
export const ButtonDeleteAccount = () => {
    const {actions} = useContext(Context);

    const navigate = useNavigate()
    const deleteAccountHandler = ()=>{
        actions.deleteAccount()
        .then(() => {
          navigate('/')
        })
    }
    return (
        <div className='p-3 '>
            <div onClick={deleteAccountHandler} className='container-fluid btn btn-outline-danger btn-lg' style={{backgroundColor: `#111418`, borderRadius: '25px', alignItems: 'center' }}>
                Eliminar Cuenta
            </div>
        </div>
    )
}