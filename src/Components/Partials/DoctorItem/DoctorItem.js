import React from 'react';

import './DoctorItem.css';

export default ({ name, photo, sector, hospital, star, children }) => {
    return (
            <div className="doctor-item">
                    {(star === true)?<img src="./Images/star1.png" alt="Doctor star" /> : ""}
                    <img src={photo}  alt="Doctor Photo"/>
                    <div className="doctor-details">
                        <span className="doctor-name">{name}</span>
                        <span>{sector}</span>
                        <span>{hospital}</span>
                        { children }
                    </div>
                </div>
    )
}