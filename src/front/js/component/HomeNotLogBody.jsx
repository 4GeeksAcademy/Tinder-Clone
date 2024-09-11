import React from "react";


export const HomeNotLogBody = () => {
    const onClickHandler = (e) => {

    }
    return (
        <div className="container-fluid d-flex flex-column justify-content-center my-auto" style={{minHeight: '87dvh'}}>
            <div className="container text-center mb-5">
                <h1>Engancha una cita</h1>
            </div>
            <div className="container text-center">
                <button className="create-home-btn home-btn" onClick={onClickHandler}>Crear una cuenta</button>
            </div>
        </div>
    );
}

