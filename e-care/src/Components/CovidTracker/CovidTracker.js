import React from 'react';

import MainBanner from '../Partials/MainBanner/MainBanner';
import CovidLive from '../CovidLive/CovidLive';

import './CovidTracker.css'

export default () => {
    return (
        <div className="covid-tracker">
            <MainBanner className="covid-banner" image="./Images/coronavirus-back.png" page="covid" />  
            <CovidLive />          
        </div>
    )
}
