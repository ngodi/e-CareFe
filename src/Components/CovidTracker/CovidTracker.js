import React from 'react';

import MainBanner from '../Partials/MainBanner/MainBanner';
import CovidLive from '../CovidLive/CovidLive';
import MainHeader from '../../Components/Partials/MainHeader/MainHeader'

import './CovidTracker.css'

export default () => {
    return (
        <div className="covid-tracker">
            <MainHeader/>
            <MainBanner className="covid-banner" image="./Images/coronavirus-back.png" page="covid" />  
            <CovidLive />          
        </div>
    )
}
