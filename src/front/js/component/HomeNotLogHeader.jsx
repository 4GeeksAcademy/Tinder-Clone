import React from "react";
import { AlignJustify } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const HomeNotLogHeader = () => {
    const navigate = useNavigate();
    const onClickHandler= ()=>{
        navigate("/")
    }
    return (
        <div className="me-3 nav-principal" style={{ color: 'transparent', verticalAlign: 'bottom' }} >
            <nav className="navbar navbar-expand-lg sticky-top" style={{ color: 'transparent' }}>
                <div className="container-fluid d-flex align-items-end">
                    <div className="d-flex align-items-center" onClick={onClickHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <radialGradient id="Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1" cx="24.39" cy="40.173" r="38.605" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fe7356"></stop><stop offset="1" stop-color="#fd297c"></stop></radialGradient><path fill="url(#Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1)" d="M17.2,20.187c7.65-2.429,8.864-9.471,7.893-15.786c0,0,0-0.364,0.243-0.243	C32.743,7.802,41,15.452,41,27.23c0,8.743-6.921,16.636-17,16.636c-10.929,0-17-7.65-17-16.757c0-5.464,3.643-10.929,7.893-13.357	c0,0,0.364,0,0.364,0.243c0,1.214,0.486,4.25,1.821,6.071L17.2,20.187z"></path>
                        </svg>
                        <a className="navbar-brand brand-resp pb-0 d-flex align-items-center"  style={{ color: 'white' }}>Tinder</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ color: "white" }}>
                        <AlignJustify />
                    </button>
                    <div className="offcanvas offcanvas-end fs-4" style={{ backgroundColor: '#111418', width: '100dvw' }} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <div className="d-flex align-items-end">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <radialGradient id="Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1" cx="24.39" cy="40.173" r="38.605" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fe7356"></stop><stop offset="1" stop-color="#fd297c"></stop></radialGradient><path fill="url(#Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1)" d="M17.2,20.187c7.65-2.429,8.864-9.471,7.893-15.786c0,0,0-0.364,0.243-0.243	C32.743,7.802,41,15.452,41,27.23c0,8.743-6.921,16.636-17,16.636c-10.929,0-17-7.65-17-16.757c0-5.464,3.643-10.929,7.893-13.357	c0,0,0.364,0,0.364,0.243c0,1.214,0.486,4.25,1.821,6.071L17.2,20.187z"></path>
                                </svg>
                                <a className="navbar-brand brand-resp pb-0" href="#" style={{ color: 'white' }}>Tinder</a>
                            </div>
                            <button type="button" className="btn-close me-4" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: 'white',filter:'invert(1)' }}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item dropdown  d-flex align-items-start  ul-display-bottom">
                                    <a className="nav-link dropdown-toggle pb-0 navbar-opt text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Niveles de suscripción
                                    </a>
                                    <ul className="dropdown-menu bg-transparent border border-0">
                                        <li><a className="dropdown-item navbar-opt" href="#" style={{ color: 'white' }}>Free</a></li>
                                        <li><a className="dropdown-item navbar-opt" href="#" style={{ color: 'white' }}>Premiun</a></li>
                                        <li><a className="dropdown-item navbar-opt" href="#" style={{ color: 'white' }}>Vip</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item d-flex align-items-center ">
                                    <a className="nav-link active pb-0 navbar-opt text-light" aria-current="page" href="/Moreinfo">Más Información</a>
                                </li>
                                <li className="nav-item d-flex align-items-center ">
                                    <a className="nav-link pb-0 navbar-opt text-light" href="#">Seguridad</a>
                                </li>

                            </ul>
                            <div className="btn-container">
                                <button className="btn btn-outline-light btn-full-offcanvas bg-light text-dark fw-bold" >INICIAR SESION</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

