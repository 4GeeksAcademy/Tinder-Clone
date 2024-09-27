import React from "react";
import NewPostButton from './NewPostButton'; // Asegúrate de que la ruta sea correcta

export const HomeNotLogBody = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center my-auto" style={{minHeight: '87dvh'}}>
            <div className="container-fluid text-center mb-5">
                <h1 style={{fontFamily: 'Montserrat', fontWeight: 'bold' ,fontSize:'4em', color:'white'}}>Sé diferente, haz clip</h1>
            </div>
            <div className="container text-center">
                <NewPostButton />
            </div>
        </div>
    );
}; 