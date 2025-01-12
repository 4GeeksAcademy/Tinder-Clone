import React from "react";
import { Quote } from 'lucide-react';

export const HomeNotLogFooter = ({name,content}) => {

    return (
        <div className="card-reviews d-none d-md-block " style={{ minWidth: '30rem', height: '100%', backgroundColor: '#111418', border: '1px solid #21262D', borderRadius: '30px', padding: '1rem' }}>
            <div className="card-body">
                <div className="container d-flex justify-content-between">
                    <div className="container">
                        <h5 className="card-title">{name}</h5>
                        <div style={{ borderBottom: 'solid', borderColor: "#333A44" }}></div>
                    </div>
                    <Quote size={48} color="#333A44" />
                </div>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

