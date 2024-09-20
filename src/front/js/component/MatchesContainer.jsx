import React from "react";
import MatchesDisplay from './MatchesDisplay.jsx'
import { useState } from 'react'

const MatchesContainer = ({ user }) => {
    const [ clickedUser, setClickedUser ] = useState(null)

    return (
        <div className="chat-container">
            <div className="profile-user">
                <img 
                    src="https://fastly.picsum.photos/id/834/700/400.jpg?hmac=WcSRjSbhQQGrtHYI63JOvzQ0lMRaV3oGCMWSCvryuSQ" 
                    alt="profile picture" 
                    className="profile-picture"
                />
            </div>
            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
            </div>

            {!clickedUser && <MatchesDisplay matches={user.matches} setClickedUser={setClickedUser}/>}
        </div>
    )
}

export default MatchesContainer