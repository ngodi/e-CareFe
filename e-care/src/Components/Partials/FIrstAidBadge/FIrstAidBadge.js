import React from 'react';
import { Link } from 'react-router-dom';

import './FIrstAidBadge.css';

export default () => {
    return (
        <div className="first-aid-badge">
            <Link to="/first-aid">FIRST AID</Link>
            <img className="aid-img" src="./Images/medical-icon.png" alt="Medical Icon" />
        </div>
    )
}