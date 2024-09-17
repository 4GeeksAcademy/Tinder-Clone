import React from "react";
import MatchesDisplay from './MatchesDisplay.jsx'
import { useState } from 'react'

const MatchesContainer = ({ user }) => {
    const [ clickedUser, setClickedUser ] = useState(null)

    return (
        <div className="chat-container">
            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
            </div>

            {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
        </div>
    )
}

export default MatchesContainer