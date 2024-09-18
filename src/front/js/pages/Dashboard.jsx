import React, { useState, useEffect, useContext } from "react";
import TinderCard from 'react-tinder-card';
import MatchesContainer from '../component/MatchesContainer.jsx';
import { Context } from "../store/appContext.js";

export const Dashboard = () => {
    const [user, setUser] = useState({ id: 1, gender_interest: 'male' });
    const [genderedUsers, setGenderedUsers] = useState(null);
    const [lastDirection, setLastDirection] = useState("");
    const [matchedUserIds, setMatchedUserIds] = useState([]);
    const [users, setUsers] = useState([]);
    const {actions, store} = useContext(Context)

    useEffect(() => {
        actions.getUsers()
    }, []);

    // useEffect(() => {
    //     if (users.length > 0) {
    //         const filteredUsers = users.filter(user => user.gender_to_show === user.gender_interest);
    //         setGenderedUsers(filteredUsers);
    //     }
    // }, [users]);

    const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {
            setMatchedUserIds([...matchedUserIds, swipedUserId]);
        }
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    // let filteredGenderedUsers = [];
    // if (genderedUsers) {
    //     filteredGenderedUsers = genderedUsers.filter(genderedUser => !matchedUserIds.includes(genderedUser.id));
    // }

    // console.log('filteredGenderedUsers ', filteredGenderedUsers)
    return (
        <>
            {user &&
            <div className="dashboard">
                <MatchesContainer user={user}/>
                <div className="swipe-container">
                    <div className="card-container">

                    {store.users.map((genderedUser) => {
                      // Capturar el código base64 desde la propiedad 'image'
                      const profilePicture = `data:image/jpeg;base64,${genderedUser.image}`;

                      return (
                          <TinderCard
                              className="swipe"
                              key={genderedUser.id}
                              onSwipe={(dir) => swiped(dir, genderedUser.id)}
                              onCardLeftScreen={() => outOfFrame(genderedUser.name)}>
                              <div className="card">
                                <h3>{genderedUser.name}</h3>
                                <img className="img-list-users" src={profilePicture} alt={genderedUser.name + "profile"} />
                              </div>
                          </TinderCard>
                      );
                  })}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>
                    </div>
                </div>
            </div>}
            <style jsx>{`
              .img-list-users {
                width: 100%;
                height: 100%;
                border-radius: 30px;
                pointer-events: none;
              }
            `}</style>
        </>
        
        
    )
}
export default Dashboard