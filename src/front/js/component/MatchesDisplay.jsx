import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const MatchesDisplay = () => {
  const {store, actions} = useContext(Context)

  useEffect(() => {
    actions.getMatches()
  }, [])

  return (
    <>
    <div className="matches-display">
      <div className="match-grid">
        {store.matches.map((match, _index) => {
          const user = match.user_id === store.userDataLogin.id ? match.user2 : match.user1;
          const userToShow = match.user_id !== store.userDataLogin.id ? match.user2 : match.user1;
          const profilePicture = `data:image/jpeg;base64,${userToShow.image}`;
          return(
            <div
              key={match.id}
              className="match-card"
            >
              <div className="img-container">
                <img src={profilePicture} alt={userToShow.name + "profile"} />
                <p className="match-Name">{userToShow.name}</p>
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