import React, { useContext, useEffect } from "react";
import MatchesDisplay from './MatchesDisplay.jsx'
import { useState } from 'react'
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const MatchesContainer = () => {
    const [ clickedUser, setClickedUser ] = useState(null)
    const { store, actions } = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
      actions.getUserProfile()
    }, [])

    return (
        <div className="chat-container">
            <div className="setColor">
            <div className="profile-user" onClick={() => navigate('/settings')}>
                <img 
                    src={store.userProfile.image} 
                    alt="profile picture" 
                    className="profile-picture"
                />
                <span className="userName">{store.userProfile.name}</span>
            </div>
            </div>
            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
            </div>

            <MatchesDisplay/>
        </div>
    )
}

export default MatchesContainer