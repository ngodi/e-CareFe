import React from 'react';

import { FaMapMarkerAlt } from "react-icons/fa";

import './HospitalItem.css';

export default ({ image, hospital, location }) => {
    return (
        <div className="hospital-item">
            <div className="hospital-header">
               <img src={image} width="100%" height="100%" alt="Hospital" />
            </div>
            <div className="hospital-location">
                <div className="hospital-title">
                   <span>{hospital}</span>
                </div>
               <span><FaMapMarkerAlt /> &nbsp; {location}</span>
            </div>
        </div>
    )
}