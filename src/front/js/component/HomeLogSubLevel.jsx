import React from 'react';

export const HomeLogSubLevel = ({ children }) => {
    return (
        <div className='p-3' style={{backgroundColor:'#111418', borderRadius:'30px'}}>
            {children}
        </div>
    )
}

export const RowLevel = (props) => {
    return (
        <>
            <h3 style={{color: '#F0F2F4'}}>{props.title}</h3>
            <p style={{color: '#A9BAC8'}}>{props.description}</p>
        </>
    )

}