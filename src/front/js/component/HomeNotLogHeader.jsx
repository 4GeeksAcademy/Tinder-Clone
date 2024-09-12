import React from "react";

export const HomeNotLogHeader = () => {
    return (
        <div className="me-3 nav-principal" style={{ color: 'white' }} >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand brand-resp" href="#" style={{ color: 'white' }}>Hooker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container-options" id="navbarNav">
                        <div className="container-fluid d-flex justify-content-between container-options">
                            <ul className="navbar-nav">

                                <li className="nav-item dropdown pb-0">

                                    <a className="nav-link dropdown-toggle a-visible navbar-opt pb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                        Planes Suscripción
                                    </a>
                                    <ul className="dropdown-menu packs bg-transparent pt-0" style={{ color: 'white', borderColor: 'transparent' }}>
                                        <li>
                                            <a className="nav-link a-visible navbar-opt" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white' }}>
                                                Funciones Premium
                                            </a>
                                        </li>
                                        <li className="navbar-opt">Niveles de suscripción</li>
                                        <ul style={{ color: 'white', listStyleType: 'none' }}>
                                            <li><a className="dropdown-item navbar-opt" href="#" style={{ color: 'white' }}>Free</a></li>
                                            <li><a className="dropdown-item navbar-opt" href="#" style={{ color: 'white' }}>Premiun</a></li>
                                            <li><a className="dropdown-item navbar-opt" href="#" style={{ color: 'white' }}>Vip</a></li>
                                        </ul>
                                        <li><hr className="dropdown-divider" /></li>
                                    </ul>
                                </li>
                                <li className="nav-item pb-0" >
                                    <a className="nav-link navbar-opt pb-0" href="#" style={{ color: 'white' }}>Más información</a>
                                </li>
                                <li className="nav-item pb-0" >
                                    <a className="nav-link navbar-opt pb-0" href="#" style={{ color: 'white' }}>Seguridad</a>
                                </li>
                                <li className="nav-item d-md-block d-xxl-none d-xl-none d-lg-none">
                                    <button className="btn btn-outline-success home-btn login-home-btn" type="submit">INICIAR SESION</button>
                                </li>
                            </ul>
                            <form className="d-none d-lg-block d-xl-block" role="search">
                                <button className="btn btn-outline-light home-btn login-home-btn" type="submit" >INICIAR SESION</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

