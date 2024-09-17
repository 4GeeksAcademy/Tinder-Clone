import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import MatchesContainer from '../component/MatchesContainer.jsx';

export const Dashboard = () => {
    const [user, setUser] = useState({ id: 1, gender_interest: 'male' });
    const [genderedUsers, setGenderedUsers] = useState(null);
    const [lastDirection, setLastDirection] = useState("");
    const [matchedUserIds, setMatchedUserIds] = useState([2, 3]);

    const users = [
        { id: 1, first_name: "Juan", url: "https://picsum.photos/200/300", gender_interest: 'male' },
        { id: 2, first_name: "Pedro", url: "https://picsum.photos/200/301", gender_interest: 'male' },
        { id: 3, first_name: "Luis", url: "https://picsum.photos/200/302", gender_interest: 'male' },
        { id: 4, first_name: "Maria", url: "https://picsum.photos/200/303", gender_interest: 'female' },
    ];

    const genderedUsersData = users.filter(user => user.gender_interest === user.gender_interest);

    useEffect(() => {
        setGenderedUsers(genderedUsersData);
    }, []);

    const swiped = (direction, swipedUserId) => {
        if (direction === 'right') {
            setMatchedUserIds([...matchedUserIds, swipedUserId]);
        }
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    let filteredGenderedUsers = [];
    if (genderedUsers) {
        filteredGenderedUsers = genderedUsers.filter(genderedUser => !matchedUserIds.includes(genderedUser.id));
    }

    console.log('filteredGenderedUsers ', filteredGenderedUsers)
    return (
        <>
            {user &&
            <div className="dashboard">
                <MatchesContainer user={user}/>
                <div className="swipe-container">
                    <div className="card-container">

                        {filteredGenderedUsers.map((genderedUser) =>
                            <TinderCard
                                className="swipe"
                                key={genderedUser.id}
                                onSwipe={(dir) => swiped(dir, genderedUser.id)}
                                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                                <div
                                    style={{backgroundImage: "url(" + genderedUser.url + ")"}}
                                    className="card">
                                    <h3>{genderedUser.first_name}</h3>
                                </div>
                            </TinderCard>
                        )}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default Dashboard