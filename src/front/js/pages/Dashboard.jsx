import React, { useState, useEffect, useContext } from "react";
import TinderCard from 'react-tinder-card';
import MatchesContainer from '../component/MatchesContainer.jsx';
import { Context } from "../store/appContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Dashboard = () => {
    const [user, setUser] = useState({ id: 1, gender_interest: 'male' });
    const { actions, store } = useContext(Context)

    useEffect(() => {
      const fetchUsers = async() => {
        try{
          await actions.getUsers()  
        }catch(error){
          console.error(error)
        }
      }
      fetchUsers()
    }, [actions.getUsers]);

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }
    
    return (
        <>
            {user &&
                <div className="dashboard">
                    <MatchesContainer/>
                    <div className="swipe-container">
                        <div className="card-container">
                            {store.users.map((user) => {
                                const profilePicture = `data:image/jpeg;base64,${user.image}`;
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
                </div>}
        </>


    )
}
export default Dashboard