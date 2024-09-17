import React from "react";
import { Quote } from 'lucide-react';

export const HomeNotLogFooter = (props) => {

    return (
        <div className="card d-none d-md-block " style={{ minWidth: '30rem', height: '15rem', backgroundColor: '#111418', borderColor: '#21262D' }}>
            <div className="card-body">
                <div className="container d-flex justify-content-between">
                    <div className="container">
                        <h5 className="card-title">Special title treatment</h5>
                        <div style={{ borderBottom: 'solid', borderColor: "#333A44" }}></div>
                    </div>
                    <Quote size={48} color="#333A44" />
                </div>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    )
}
