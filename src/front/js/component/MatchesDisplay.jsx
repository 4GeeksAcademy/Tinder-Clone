import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const MatchesDisplay = () => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [matches, setMatches] = useState(null);
  const [clickedUser, setClickedUser] = useState(null);
  const {store, actions} = useContext(Context)


  
  // const matchesData = [
  //   { id: 1, userId: 1, matches: [2, 3] },
  //   { id: 2, userId: 2, matches: [1, 4] },
  //   { id: 3, userId: 3, matches: [1, 2] },
  //   { id: 4, userId: 4, matches: [2, 3] },
  // ];


  // let filteredMatchedProfiles = [];
  // if (matchedProfiles && matches) {
  //   filteredMatchedProfiles = matchedProfiles.filter((matchedProfile) =>
  //     matches.find((match) => match.userId === matchedProfile.id)
  //   );
  // }

  

  return (
    <div className="matches-display">
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
            </div>
            <h3>{match.name}</h3>
          </div>
        )
    })}
    </div>
  );
};

export default MatchesDisplay;