import React, { useState, useEffect } from "react";

const MatchesDisplay = () => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [matches, setMatches] = useState(null);
  const [clickedUser, setClickedUser] = useState(null);

  // Simulación de data de usuarios y matches
  const users = [
    { id: 1, name: "Juan", url: "https://picsum.photos/200/300" },
    { id: 2, name: "Pedro", url: "https://picsum.photos/200/301" },
    { id: 3, name: "Luis", url: "https://picsum.photos/200/302" },
    { id: 4, name: "Maria", url: "https://picsum.photos/200/303" },
  ];

  const matchesData = [
    { id: 1, userId: 1, matches: [2, 3] },
    { id: 2, userId: 2, matches: [1, 4] },
    { id: 3, userId: 3, matches: [1, 2] },
    { id: 4, userId: 4, matches: [2, 3] },
  ];

  useEffect(() => {
    // Simulación de la función getMatches
    const getMatches = () => {
      try {
        // En lugar de hacer una petición a un servidor, simplemente asignamos la data simulada
        setMatchedProfiles(users);
        setMatches(matchesData);
      } catch (error) {
        console.log(error);
      }
    };

    getMatches();
  }, []);

  let filteredMatchedProfiles = [];
  if (matchedProfiles && matches) {
    filteredMatchedProfiles = matchedProfiles.filter((matchedProfile) =>
      matches.find((match) => match.userId === matchedProfile.id)
    );
  }

  return (
    <div className="matches-display">
      {filteredMatchedProfiles && filteredMatchedProfiles.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match.url} alt={match.name + " profile"} />
          </div>
          <h3>{match.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;