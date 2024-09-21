import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const MatchesDisplay = () => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [matches, setMatches] = useState(null);
  const [clickedUser, setClickedUser] = useState(null);
  const {store, actions} = useContext(Context)

  

  return (
    <>
    <div className="matches-display">
      <div className="match-grid">
      {/* {filteredMatchedProfiles && filteredMatchedProfiles */}
      {store.users.map((match, _index) => {
        const profilePicture = `data:image/jpeg;base64,${match.image}`;
        return(
          <div
            key={_index}
            className="match-card"
            onClick={() => setClickedUser(match)}
          >
            <div className="img-container">
              {/* Since the API doesn't provide a URL for the user's image, we'll use a placeholder */}
              <img src={profilePicture} alt={match.name + "profile"} />
              <p className="match-Name">{match.name}</p>
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