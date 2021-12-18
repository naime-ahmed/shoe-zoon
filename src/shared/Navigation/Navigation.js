import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../images/show_zone_logo.png';
import UseAuth from '../../pages/Hooks/UseAuth';

const Navigation = () => {
    const [isActive, setIsActive] = useState(false);

    const { user, admin, logOut } = UseAuth();

    document.onclick = function (e) {
        if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
            setIsActive(false);
            
        }
    }
    const handleLogOut = () => {
        const confirmation = window.confirm("are you sure, want to logOut??")
        if (confirmation) {
            logOut();
        }
    }
    
    return (
        <div>
            <header id="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div onClick={() => {
                    isActive ? setIsActive(false) : setIsActive(true)

                }} id="toggle" className={isActive ? 'active' : ''}></div>

                <div id="navbar" className={isActive ? 'active' : ''} >
                    <ul>
                        { user.email && <li><Link to="/">{ user.displayName}</Link></li>}
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/featured">Featured</Link></li>
                        {admin && <li><Link to="/dashboard">Dashboard</Link></li>}
                        { !admin && <li><Link to="/myOrders">My Orders</Link></li>}
                        { !user.email && <li><Link to="/signIn">Sign in</Link></li>}
                        
                        { user.email && <li><Link onClick={handleLogOut} to="/">Sign Out</Link></li>}
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navigation;