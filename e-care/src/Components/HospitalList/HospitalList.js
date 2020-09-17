import React from 'react';

import MainBanner from '../Partials/MainBanner/MainBanner';
import './HospitalList.css';

export default () => {
    return (
        <div className="hospital-list">
             <MainBanner image="./Images/hero.png" heading="Get Your Doctor" description="Reach Out To Our Doctors or Book Your Appointment Rightaway" page="doctorlist" />
        </div>
    )
}