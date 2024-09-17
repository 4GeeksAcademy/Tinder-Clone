import React from 'react';
import { Facebook, Instagram, X } from "lucide-react";

export const SocialMedia = () => {
    return(
        <div className="container" >
            <h2 className="text-start" style={{ color: "white" }}> REDES SOCIALES</h2>
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
    )
}