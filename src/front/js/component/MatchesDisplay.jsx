import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const MatchesDisplay = () => {
  const {store, actions} = useContext(Context)
  const userDataLogin = JSON.parse(localStorage.getItem('userDataLogin'))
  useEffect(() => {
    actions.getMatches()
    
    const interval = setInterval(() => {
      actions.getMatches()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <div className="matches-display">
      <div className="match-grid">
        {store.matches.map((match, _index) => {
          const user = match.user1.id === userDataLogin.id ? match.user2 : match.user1;
          const profilePicture = user.image;
          return(
            <div
              key={match.id}
              className="match-card"
            >
              <div className="img-container">
                <img src={profilePicture} alt={user.name + "profile"} />
                <p className="match-Name">{user.name}</p>
              </div>
            </div>
          )
      })}
      </div>
    </div>
    </>
  );
};

export default MatchesDisplay;