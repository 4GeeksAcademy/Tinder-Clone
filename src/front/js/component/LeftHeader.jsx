import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export const LeftHeader = () => {
    const {store,actions} = useContext(Context);
    const navigate = useNavigate();
    const [isProfile,setIsProfile] = useState(false);
    const onClickHandler=()=>{
        if(!isProfile){
            navigate('/dashboard')
        } else{
            navigate('/settings')
        }
        setIsProfile(prev=>!prev)
    }
    const logOutSession = () => {
        setTimeout(() => {
          actions.logOut()          
          navigate('/')
        }, 2000)
      }
  
    return (
        <div className="setColor">
            <div className="profile-user">
                <div className="profile-user-info" onClick={onClickHandler}>
                    <img
                        src={store.userProfile.image}
                        alt="profile picture"
                        className="profile-picture"
                    />
                    <span className="userName">{store.userProfile.name}</span>
                </div>
                <div>
                    <button
                        onClick={() => logOutSession()}
                        style={{
                            backgroundColor: '',
                            color: '#black',
                            border: 'none',
                            padding: '5px 10px',
                            fontSize: '10px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            float: 'right',
                        }}
                    >
                        <FontAwesomeIcon
                            icon="fa-solid fa-right-from-bracket"
                            style={{
                                fontSize: '20px',

                            }}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}