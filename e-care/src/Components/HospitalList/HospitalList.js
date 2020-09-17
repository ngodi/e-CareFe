import React from 'react';

import MainBanner from '../Partials/MainBanner/MainBanner';
import MainHeading from '../Partials/MainHeading/MainHeading';
import SubNav from '../Partials/SubNav/SubNav';
import HospitalsTop from '../HospitalsTop/HospitalsTop';
import HospitalsNear from '../HospitalsNear/HospitalsNear';
import HospitalsSuper from '../HospitalsSuper/HospitalsSuper';

import './HospitalList.css';


export default () => {
    return (
        <div className="hospital-list">
             <MainBanner image="./Images/hero.png" heading="Get Your Doctor" description="Reach Out To Our Doctors or Book Your Appointment Rightaway" page="hospitallist" />
             <img className="our-process" src="./Images/our-process.png" alt="our process" width="100%" height="120px" />
             <SubNav />
             <MainHeading title="Top Hospitals" />
             <HospitalsTop />
             <MainHeading title="Hospitals Near You" />
             <HospitalsNear />
             <MainHeading title="Super Speciality Hospitals" />
             <HospitalsSuper />
        </div>
    )
}