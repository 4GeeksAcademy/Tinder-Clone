import React from "react";

export const HomeNotLogHeader = () => {    
    return (
        <div className="me-3" style={{color:'white'}} >
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand brand-resp" href="#">Hooker</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="container-fluid d-flex justify-content-center container-options">

                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle a-visible" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Planes Suscripción
                                    </a>
                                    <ul className="dropdown-menu packs bg-transparent">
                                        <li><a className="dropdown-item" href="#">Free</a></li>
                                        <li><a className="dropdown-item" href="#">Premiun</a></li>
                                        <li><a className="dropdown-item" href="#">Vip</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                                <li className="nav-item d-md-block d-xxl-none d-xl-none d-lg-none">
                                <button className="btn btn-outline-success home-btn login-home-btn" type="submit">INICIAR SESION</button>
                                </li>
                            </ul>
                            <form className="d-none d-lg-block d-xl-block" role="search">
                                <button className="btn btn-outline-success home-btn login-home-btn" type="submit" >INICIAR SESION</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

