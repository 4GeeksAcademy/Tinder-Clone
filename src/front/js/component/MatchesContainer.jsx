import React, { useContext, useEffect } from "react";
import MatchesDisplay from './MatchesDisplay.jsx'
import { useState } from 'react'


import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import { LeftHeader } from "./LeftHeader.jsx";


const MatchesContainer = () => {
  const [clickedUser, setClickedUser] = useState(null)
  const { store, actions } = useContext(Context)

  const navigate = useNavigate()
    useEffect(() => {
      actions.getUserProfile()
    }, [])  
    return (
        <div className="chat-container">
            <LeftHeader/>
            
            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
            </div>

            <MatchesDisplay/>
        </div>
      
  )
}

export default MatchesContainer