import React, { useState } from "react";
import { AlignJustify, Blocks } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import NewLoginButton from './NewLoginButton'; 
export const HomeNotLogHeader = ({isDisplayed}) => {
    const [cursor, setCursor] = useState("pointer")
    const navigate = useNavigate();
    const onClickHandler = (link) => {
      return () => {
        navigate(`/${link}`)
      }
    }
    // const onMouseEnterHandler = (e) => {
    //     setCursor("pointer")
    //     console.log(e)
    //     console.log(cursor)
    // }
    // const onMouseLeave = ()=>{
    //     setCursor("default")
    // }
    return (
        <div className="me-3 nav-principal" style={{ color: 'transparent', verticalAlign: 'bottom'}}  >
            <nav className="navbar navbar-expand-lg sticky-top pt-0" style={{ color: 'transparent' }}>
                <div className="container-fluid d-flex align-items-center position-relative">
                    <div className="d-flex align-items-end" onClick={() => onClickHandler("")} style={{ cursor: `${cursor}` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48" >
                            <radialGradient id="Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1" cx="24.39" cy="40.173" r="38.605" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fe7356"></stop><stop offset="1" stopColor="#fd297c"></stop></radialGradient><path fill="url(#Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1)" d="M17.2,20.187c7.65-2.429,8.864-9.471,7.893-15.786c0,0,0-0.364,0.243-0.243	C32.743,7.802,41,15.452,41,27.23c0,8.743-6.921,16.636-17,16.636c-10.929,0-17-7.65-17-16.757c0-5.464,3.643-10.929,7.893-13.357	c0,0,0.364,0,0.364,0.243c0,1.214,0.486,4.25,1.821,6.071L17.2,20.187z"></path>
                        </svg>
                        <p className="navbar-brand brand-resp pb-0 mb-0" style={{ color: isDisplayed?'white':'black', verticalAlign: "bottom", display: "table-cell" }}>Tinder</p>
                    </div>
                    <button className="navbar-toggler border border-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style={{ color: "white" }}>
                        <AlignJustify />
                    </button>
                    <div className="offcanvas offcanvas-end fs-4" style={{ backgroundColor: '#111418', width: '100dvw', display: isDisplayed? 'block':'none' }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <div className="d-flex align-items-end" onClick={() => onClickHandler("")}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <radialGradient id="Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1" cx="24.39" cy="40.173" r="38.605" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fe7356"></stop><stop offset="1" stopColor="#fd297c"></stop></radialGradient><path fill="url(#Tkc2EFCGCAaG3EvLlEqzza_hp54uGDlrEZB_gr1)" d="M17.2,20.187c7.65-2.429,8.864-9.471,7.893-15.786c0,0,0-0.364,0.243-0.243	C32.743,7.802,41,15.452,41,27.23c0,8.743-6.921,16.636-17,16.636c-10.929,0-17-7.65-17-16.757c0-5.464,3.643-10.929,7.893-13.357	c0,0,0.364,0,0.364,0.243c0,1.214,0.486,4.25,1.821,6.071L17.2,20.187z"></path>
                                </svg>
                                <p className="navbar-brand brand-resp pb-0 mb-0" onClick={() => onClickHandler("")} style={{ color: 'white',cursor:`${cursor}` }}>Tinder</p>
                            </div>
                            <button type="button" className="btn-close me-4" data-bs-dismiss="offcanvas" aria-label="Close" style={{ color: 'white', filter: 'invert(1)' }}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item dropdown  d-flex align-items-start  ul-display-bottom">
                                    <p className="nav-link dropdown-toggle pb-0 navbar-opt text-light mb-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Niveles de suscripción
                                    </p>
                                    <ul className="dropdown-menu bg-transparent border border-0">
                                        <li ><p onClick={onClickHandler('Subscription')} className="dropdown-item navbar-opt" href="#" style={{ cursor:'default',color: 'white' }}>Free</p></li>
                                        <li ><p onClick={onClickHandler('Subscription')} className="dropdown-item navbar-opt" href="#" style={{ cursor:'default',color: 'white' }}>Premiun</p></li>
                                        <li ><p onClick={onClickHandler('Subscription')} className="dropdown-item navbar-opt" href="#" style={{ cursor:'default',color: 'white' }}>Vip</p></li>
                                    </ul>
                                </li>
                                <li className="nav-item d-flex align-items-center ">
                                    <span className="nav-link active pb-0 navbar-opt text-light" aria-current="page" onClick={() => onClickHandler("Moreinfo")} style={{cursor:`${cursor}`}}>Más Información</span>
                                </li>
                                <li className="nav-item d-flex align-items-center ">
                                    <p className="nav-link pb-0 navbar-opt text-light mb-0" style={{cursor:`${cursor}`}} onClick={() => onClickHandler("Security")}>Seguridad</p>
                                </li>
                            </ul>
                            <div className="btn-container">
                                <NewLoginButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}