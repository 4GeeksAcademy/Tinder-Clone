import React from "react";
import { HomeMoreInfoSection } from "../component/HomeMoreInfoSection.jsx";
import { HomeNotLogHeader } from "../component/HomeNotLogHeader.jsx";
import { HomeMoreInfoSectionColumn } from "../component/HomeMoreInfoSectionColumn.jsx";
import { SocialMedia } from "../component/SocialMedia.jsx";



export const HomeMoreInfo = () => {
    return (
        <div className="container-fluid px-0 pt-0"> 
            <div className="container-fluid px-0 pt-0" style={{ color: '#B9BFC8', backgroundColor: '#111418' }}>
                <HomeNotLogHeader />
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#000000' }}>
                <div className="container text-center pb-4 d-flex justify-content-center" style={{ width: '60dvw' }}>
                    <HomeMoreInfoSection />
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#111418' }}>
                <HomeMoreInfoSectionColumn />
                <SocialMedia/>
            </div>
        </div>
    )
}