import React from 'react';

import './Emergency.css';
import SubHeader from '../Components/Partials/SubHeader/SubHeader';

export default () => {
    return (
        <div className="emergency">
             <SubHeader image = "./Images/hero-image.png" heading = "EMERGENCY!" description = "Call Us: 0011/0012" />
        </div>
    )
}