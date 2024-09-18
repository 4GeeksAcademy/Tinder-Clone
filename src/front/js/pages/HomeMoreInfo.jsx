import React from "react";
import { HomeMoreInfoSection } from "../component/HomeMoreInfoSection.jsx";
import { HomeNotLogHeader } from "../component/HomeNotLogHeader.jsx";
import { HomeMoreInfoSectionColumn } from "../component/HomeMoreInfoSectionColumn.jsx";
import { Facebook, Instagram, X } from "lucide-react";


export const HomeMoreInfo = () => {
    return (
        <div className="container-fluid px-0 pt-0"> 
            <div className="container-fluid px-0 pt-0" style={{ color: '#B9BFC8', backgroundColor: '#111418' }}>
                <HomeNotLogHeader isDisplayed={true}/>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#000000' }}>
                <div className="container text-center pb-4 d-flex justify-content-center" style={{ width: '60dvw' }}>
                    <HomeMoreInfoSection />
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#111418' }}>
                <HomeMoreInfoSectionColumn />
                <div className="container" >
                    <h2 style={{ color: "white" }}> REDES SOCIALES</h2>
                    <div className="container d-flex me-5" style={{ color: 'white' }}>
                        <div className="social-media">
                            <Instagram size={48} />
                        </div>
                        <div className="social-media">
                            <Facebook size={48} />
                        </div>
                        <div className="social-media">
                            <X size={48} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}