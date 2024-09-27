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
        <div className="p-0">
            <LeftHeader/>            
            <div className="d-flex justify-content-start">
                <button className="option-button" onClick={() => setClickedUser(null)}>Matches</button>
            </div>

            <MatchesDisplay/>
        </div>
      
  )
}

export default MatchesContainer