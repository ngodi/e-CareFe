import React from 'react';

import DoctorItem from '../Partials/DoctorItem/DoctorItem';
import MainBanner from '../Partials/MainBanner/MainBanner';
import SubNav from '../Partials/SubNav/SubNav';
import MainHeading from '../Partials/MainHeading/MainHeading';

import './DoctorList.css';
import DoctorsTopChoices from '../DoctorsTopChoices/DoctorsTopChoices';
import DoctorsIndemand from '../DoctorsIndemand/DoctorsIndemand';
import DoctorsFreeTreatment from '../DoctorsFreeTreatment/DoctorsFreeTreatment';


export default () => {
    return (
        <div className="doctor-list">
            <MainBanner image="./Images/hero.png" heading="Get Your Doctor" description="Reach Out To Our Doctors or Book Your Appointment Rightaway" page="doctorlist" />
            <img className="our-process" src="./Images/our-process.png" alt="our process" width="100%" height="120px" />
            <SubNav />
            <MainHeading title="Top Choices" />
            <DoctorsTopChoices />
            <MainHeading title="In Demand" />
            <DoctorsIndemand />
            <MainHeading title="Treatment at FREE of Cost" />
            <DoctorsFreeTreatment />
        </div>
    )
}