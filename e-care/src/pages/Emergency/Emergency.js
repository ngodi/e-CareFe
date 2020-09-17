import React from 'react';

import './Emergency.css';

import CovidOverview from '../../Components/Partials/CovidOverview/CovidOverview';
import AvailableDoctors from '../../Components/AvailableDoctors/AvailableDoctors';
import DoctorsTips from '../../Pages/Articles/Components/DoctorsTips/DoctorsTips';
import ContactSection from '../../Components/ContactSection/ContactSection';
import QuickLinks from '../../Components/QuickLinks/QuickLinks';
import EmergencyNumber from '../../Components/Partials/EmergencyNumber/EmergencyNumber';
import MainBanner from '../../Components/Partials/MainBanner/MainBanner';
import SubNav from '../../Components/Partials/SubNav/SubNav';

export default () => {
    return (
        <div className="emergency">
             <MainBanner image = "./Images/emergency.png" heading = "EMERGENCY!" description = "Call Us: 0011/0012" />
             <CovidOverview image="./Images/corona-logo.png" country="INDIA" more="Know More" />
             <SubNav />
             <AvailableDoctors />
             <ContactSection />
             <QuickLinks />
             <EmergencyNumber />
             <DoctorsTips heading="Emergency Health Tips"/>
        </div>
    )
}