import React from 'react';

import './Emergency.css';
import SubHeader from '../Components/Partials/SubHeader/SubHeader';

import CovidOverview from '../Components/CovidOverview/CovidOverview';

export default () => {
    return (
        <div className="emergency">
             <SubHeader image = "./Images/emergency.png" heading = "EMERGENCY!" description = "Call Us: 0011/0012" />
             <CovidOverview />
        </div>
    )
}