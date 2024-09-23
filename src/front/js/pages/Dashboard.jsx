import React, { useState, useEffect, useContext } from "react";
import TinderCard from 'react-tinder-card';
import MatchesContainer from '../component/MatchesContainer.jsx';
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Dashboard = () => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
      const fetchUsers = async() => {
        try{
          await actions.getUsersByPreferences()  
        }catch(error){
          console.error(error)
        }
      }
      fetchUsers()
    }, [actions.getUsersByPreferences]);

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    
    return (
        <>
          <div className="dashboard">
              <MatchesContainer/>
              <div className="swipe-container">
                  <div className="card-container">
                      {store.users.map((user) => {
                          const profilePicture = user.image;
                          return (
                              <TinderCard
                                  className="swipe"
                                  key={user.id}
                                  onCardLeftScreen={() => outOfFrame(user.name)}
                                  >
                                  <div className="card">
                                      <h3>{user.name}</h3>
                                      <img className="img-list-users" src={profilePicture} alt={user.name + "profile"} />
                                      <div className="container-card-action-button">
                                          <button className="return-button">
                                              <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />     </button>
                                          <button className="no-button">
                                              <FontAwesomeIcon icon="fas fa-times" />
                                          </button>
                                          <button className="super-like-button">
                                              <FontAwesomeIcon icon="fa-solid fa-star" />
                                          </button>
                                          <button className="like-button">
                                              <FontAwesomeIcon icon="fa-solid fa-heart" />
                                          </button>
                                          <button className="boost-button">
                                              <FontAwesomeIcon icon="fa-solid fa-bolt" />
                                          </button>
                                      </div>
                                  </div>
                              </TinderCard>
                          );
                      })}
                  </div>
                  
              </div>
          </div>
        </>


    )
}
export default Dashboard