import React from "react";

export const HomeNotLogHeader = () => {
    return (
        <div className="me-3 nav-principal" style={{ color: 'white' }} >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <radialGradient id="Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1" cx="24.39" cy="40.173" r="38.605" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fe7356"></stop><stop offset="1" stop-color="#fd297c"></stop></radialGradient><path fill="url(#Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1)" d="M17.2,20.187c7.65-2.429,8.864-9.471,7.893-15.786c0,0,0-0.364,0.243-0.243	C32.743,7.802,41,15.452,41,27.23c0,8.743-6.921,16.636-17,16.636c-10.929,0-17-7.65-17-16.757c0-5.464,3.643-10.929,7.893-13.357	c0,0,0.364,0,0.364,0.243c0,1.214,0.486,4.25,1.821,6.071L17.2,20.187z"></path>
                    </svg>
                    <a className="navbar-brand brand-resp" href="#" style={{ color: 'white' }}>Tinder</a>
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
                                    <a className="nav-link navbar-opt pb-0" target="_self" href="/Moreinfo" style={{ color: 'white' }}>Más información</a>
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

