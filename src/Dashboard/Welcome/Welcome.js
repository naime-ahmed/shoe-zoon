import React from 'react';
import './Welcome.css';
import welcomeImg from '../../images/manage-your-dashboard.jpg';

const Welcome = () => {
    return (
        <div className='welcome_img'>
            <img src={welcomeImg} alt="" />
        </div>
    );
};

export default Welcome;