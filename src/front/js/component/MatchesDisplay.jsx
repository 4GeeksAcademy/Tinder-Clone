import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const MatchesDisplay = () => {
  const { store, actions } = useContext(Context)
  const userDataLogin = JSON.parse(localStorage.getItem('userDataLogin'))
  const [isModalOpen, setIsModalOpen] = useState(false) // new state to store modal open state

  useEffect(() => {
    actions.getMatches()
    
    const interval = setInterval(() => {
      actions.getMatches()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleModalOpen = () => {
    console.log('Modal open button clicked!');
    setIsModalOpen(true)
    console.log('isModalOpen:', isModalOpen)
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  useEffect(() => {
    console.log('isModalOpen:', isModalOpen)
  }, [isModalOpen])

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
                  onClick={handleModalOpen} 
                  style={{
                    cursor: 'pointer', // add a pointer cursor to indicate it's clickable
                    padding: '10px', // add some padding to make it look like a button
                    border: '1px solid #ccc', // add a border to make it look like a button
                    borderRadius: '10px', // add a border radius to make it look like a button
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

      {/* Modal component */}
      {isModalOpen && (
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
        width: 400,
        maxWidth: '90%'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h3 style={{color: "white"}}>Información:</h3>
        <div
          style={{
            cursor: 'pointer'
          }}
          onClick={handleModalClose}
        >
          <i className="fas fa-times" style={{ color: 'white', fontSize: 20 }} />
        </div>
      </div>

      <div style={{ marginTop: 20, color: 'white' }}>
        <p>
          <strong>Nombre:</strong> Cecilia
        </p>
        <p>
          <strong>Edad:</strong> 30
        </p>
        <p>
          <strong>Redes sociales:</strong>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" /> Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" /> Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" /> Instagram
          </a>
        </p>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default MatchesDisplay;