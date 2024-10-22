import React, { useEffect, useContext, useRef, useState } from "react";
import TinderCard from 'react-tinder-card';
import MatchesContainer from '../component/MatchesContainer.jsx';
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Toaster, toast } from 'sonner'

export const Dashboard = () => {
  const { actions, store } = useContext(Context)
  const cardRef = useRef([])
  const [likedCards, setLikedCards] = useState(new Set())

  const idUserFromLocalStorage = JSON.parse(localStorage.getItem('userDataLogin')).id

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await actions.getUsersByPreferences()
      } catch (error) {
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
    if (likedCards.has(index)) return
    setLikedCards(prev => new Set(prev).add(index))
    try {
      const likeResponse = await actions.like(idFrom, idTo)
      if (likeResponse.msg === 'Es un match!') {
        toast.success(likeResponse.msg)
      }
      console.log(likeResponse)
      swipeCard('right', index)
    } catch (error) {
      toast.error(error.message)
    }
  }
  const onSwipeLike = (dir, idTo, index) => {
    if (dir === 'right') {
      handleLike(idUserFromLocalStorage, idTo, index)
    }
  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-sm-12 order-sm-2 col-md-3 order-md-1 col-lg-2 col-xl-2 h-100 p-0">
            <MatchesContainer />
          </div>
          <div className="col-sm-12 order-sm-1 col-md-9 order-md-2 col-lg-10 col-xl-10 h-100">            
              <div className="container-fluid vh-100 w-100">
                <div className="container-fluid vh-100 w-100 d-flex justify-content-center align-items-center">
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
        </div>
      </div>
    </>


  )
}
export default Dashboard