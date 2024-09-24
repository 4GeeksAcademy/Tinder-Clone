import React from 'react';
import { Context } from "../store/flux"
import { HomeLogSubLevel, RowLevel } from "../component/HomeLogSubLevel.jsx"



export const ProfileSettings = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="flex-column">
          <div>
            <p style={{ textAlign: 'center' }}>Profile Settings</p>
          </div>
          <div>
            <HomeLogSubLevel>
              <RowLevel toNavigate='/vip' title="Clipped Vip" description="Clipped al siguiente nivel" />
            </HomeLogSubLevel>
          </div>
          <div>
            <HomeLogSubLevel>
              <RowLevel toNavigate='/premium' title="Clipped Premium" description="Mira a quienes les gustas" />
            </HomeLogSubLevel>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="scrollable-card">
          <div className="user-profile-card" style={{
            maxWidth: '500px',
            maxHeight: '600px',
            overflowY: 'auto',
            borderRadius: '10px',
            border: '1px solid #ccc',
            padding: '20px' // add some padding to the card
          }}>
            <img src="https://picsum.photos/700/600" alt="Profile picture" style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '250px',
              borderRadius: '10px', // add a rounded corner to the image
              marginBottom: '20px' // add some margin between the image and the text
            }} />
            <div className="user-info">
              <div className='user-basic' style={{
                borderBottom: '1px solid #ddd', // add a thin gray line
                paddingBottom: '20px' // add some padding to the bottom
              }}>
                <h3>
                  Esteban, 20
                </h3>
              </div>
              <div className='user-description' style={{
                borderBottom: '1px solid #ddd',
                paddingBottom: '10px'
              }}>
                <p>
                  user description
                </p>
              </div>
              <div className='user-interests' style={{
                paddingBottom: '20px' // add some padding to the bottom
              }}>
                <p>
                  más sobre mí "acuario etc"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
