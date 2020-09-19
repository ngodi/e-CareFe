import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';

export default () => {
    return (
        <div className="main-nav">
            <span>Patient Care</span>
            <span><Link to="/doctors">Doctors</Link></span>
            <span>Hospitals</span>
            <span>About Us</span>
            <span>Contact Us</span>
       </div>
    )
}