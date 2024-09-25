import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const MatchesDisplay = () => {
  const { store, actions } = useContext(Context)
  const userDataLogin = JSON.parse(localStorage.getItem('userDataLogin'))
  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [selectedMatch, setSelectedMatch] = useState(null)

  useEffect(() => {
    actions.getMatches()
    
    const interval = setInterval(() => {
      actions.getMatches()
    }, 5000)
    return () => clearInterval(interval)
  }, [])
  console.log(store.matches)
  const handleModalOpen = (match) => {
    setSelectedMatch(match)
    setIsModalOpen(true)
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedMatch(null)
  }
  
  return (
    <>
      <div className="matches-display">
        <div className="match-grid">
          {store.matches.map((match, _index) => {
            const user = match.user1.id === userDataLogin.id ? match.user2 : match.user1;
            const profilePicture = user.image;
              return (
                <div
                  key={match.id}
                  className="match-card"
                >
                <div 
                  className="img-container" 
                  onClick={() => handleModalOpen(match)} 
                  style={{
                    cursor: 'pointer', 
                    padding: '10px', 
                    border: '1px solid #ccc', 
                    borderRadius: '10px', 
                  }}
                >
                <img src={profilePicture} alt={user.name + "profile"} />
                <p className="match-Name">{user.name}</p>
                </div>
              </div>
              )
          })}
        </div>
        </div>
          {isModalOpen && setSelectedMatch &&(
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
            <div
              style={{
                backgroundColor: '#333',
                padding: 20,
                borderRadius: 10,
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  cursor: 'pointer'
                }}
                onClick={handleModalClose}
              >
                <i className="fas fa-times" style={{ color: 'white', fontSize: 20 }} />
              </div>
            </div>

            <div style={{ marginTop: 20, color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img src={selectedMatch.user1.id === userDataLogin.id ? selectedMatch.user2.image : selectedMatch.user1.image} style={{width: '230px', height: '250px', marginBottom: '10px'}}/>
              </div>
              <p>
                <strong>Nombre:</strong> {selectedMatch.user1.id === userDataLogin.id ? selectedMatch.user2.name : selectedMatch.user1.name}
              </p>
              <p>
                <strong>Edad:</strong>{selectedMatch.user1.id === userDataLogin.id ? selectedMatch.user2.age : selectedMatch.user1.age}
              </p>
              <p style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>
                  <strong>Redes sociales:</strong>
                </div>
                <div className="match-card-contact" style={{columnGap: '30px', display: 'flex'}}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" /> 
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f" /> 
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-whatsapp"></i> 
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MatchesDisplay;