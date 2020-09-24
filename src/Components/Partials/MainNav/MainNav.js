import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

export default () => {
    return (
        <div className="main-nav">
            <span>Patient Care</span>
            <span><Link to="/doctors">Doctors</Link></span>
            <span><Link to="/hospitals">Hospitals</Link></span>
            <span>About Us</span>
            <span><Link to = '/contactus'>Contact Us</Link></span>
       </div>
    )
}