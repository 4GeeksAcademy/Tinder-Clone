import React, { useEffect, useContext, useRef } from "react";
import TinderCard from 'react-tinder-card';
import MatchesContainer from '../component/MatchesContainer.jsx';
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Dashboard = () => {
    const { actions, store } = useContext(Context)
    const cardRef = useRef([])

    const idUserFromLocalStorage = JSON.parse(localStorage.getItem('userDataLogin')).id

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
    const swipeCard = (dir, index) => {
      cardRef.current[index]?.swipe(dir)
    }
    const handleLike = async (idFrom, idTo, index) => {
      try{
        const likeResponse = await actions.like(idFrom, idTo)
        console.log(likeResponse)
        swipeCard('right', index)
      }catch(error){
        console.error(error)
      }
    }
    const onSwipeLike = (dir, idTo, index) => {
      if(dir === 'right'){
        handleLike(idUserFromLocalStorage, idTo, index)
      }
    }
    
    return (
        <>
          <div className="dashboard">
              <MatchesContainer/>
              <div className="swipe-container">
                  <div className="card-container">
                      {store.users.map((user, index) => {
                          const profilePicture = user.image;
                          return (
                              <TinderCard
                              ref={(el) => cardRef.current[index] = el}
                                  className="swipe"
                                  key={user.id}
                                  onCardLeftScreen={() => outOfFrame(user.name)}
                                  onSwipe={(dir) => onSwipeLike(dir, user.id, index)}
                                  preventSwipe={['down']}
                                  >
                                  <div className="card">
                                      <h3>{user.name}</h3>
                                      <img className="img-list-users" src={profilePicture} alt={user.name + "profile"} />
                                      <div className="container-card-action-button">
                                          <button className="return-button">
                                              <FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />     </button>
                                          <button className="no-button" onClick={() => swipeCard('left', index)}>
                                              <FontAwesomeIcon icon="fas fa-times" />
                                          </button>
                                          <button className="super-like-button">
                                              <FontAwesomeIcon icon="fa-solid fa-star" />
                                          </button>
                                          <button className="like-button" onClick={() => handleLike(idUserFromLocalStorage, user.id, index)}>
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