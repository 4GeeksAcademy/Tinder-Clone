import React from "react";
import MatchesDisplay from './MatchesDisplay.jsx'
import { useState } from 'react'

const MatchesContainer = () => {
    const [ clickedUser, setClickedUser ] = useState(null)

    return (
        <div className="chat-container">
            <div className="setColor">
            <div className="profile-user">
                <img 
                    src="https://fastly.picsum.photos/id/834/700/400.jpg?hmac=WcSRjSbhQQGrtHYI63JOvzQ0lMRaV3oGCMWSCvryuSQ" 
                    alt="profile picture" 
                    className="profile-picture"
                />
                <span className="userName">name for example</span>
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