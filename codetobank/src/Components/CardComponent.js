import React from 'react';
import card from '../Images/card.png';

const Card = (props) => {
    let user = JSON.parse(localStorage.getItem('user')) || {}
    return (
        <div className='dashboard-info'>
            <p className='card-text'>{user?.data?.firstName} {user?.data?.lastName}</p>
            <p className='card-text bottom'>**** **** **** 2323</p>
            <img className='card-img' src={card} alt='card' />
        </div>
    )
}

export default Card;