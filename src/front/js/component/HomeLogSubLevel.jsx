import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeLogSubLevel = ({ children }) => {
    return (
        <div className='p-3' style={{minWidth:'150px'}}>
            {children}
        </div>
    )
}

export const RowLevel = (props) => {
    const navigate = useNavigate();
    const onClickHandler = ()=>{
        navigate(props.toNavigate)
    }
    return (
        <div onClick={onClickHandler} style={{backgroundColor:`${props.color}`, borderRadius:'25px', padding:'0.7rem',alignItems:'center'}}>
            <h3 style={{color: '#F0F2F4', fontSize:'1rem'}}>{props.title}</h3>
            <p style={{color: '#A9BAC8'}}>{props.description}</p>
        </div>
    )

}