import React from "react";
import NewPostButton from './NewPostButton'; // Asegúrate de que la ruta sea correcta

export const HomeNotLogBody = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center my-auto" style={{minHeight: '87dvh'}}>
            <div className="container text-center mb-5">
                <h1 style={{fontSize:'5em', color:'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>Engancha una cita</h1>
            </div>
            <div className="container text-center">
                <NewPostButton />
            </div>
        </div>
    );
};