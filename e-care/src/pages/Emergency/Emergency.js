import React from 'react';

import './Emergency.css';
import SubHeader from '../../Components/Partials/SubHeader/SubHeader';

import CovidOverview from '../../Components/CovidOverview/CovidOverview';
import NavigationPanel from '../../Components/Partials/NavigationPanel/NavigationPanel';
import AvailableDoctors from '../../Components/AvailableDoctors/AvailableDoctors';
import DoctorsTips from '../../Articles/Components/DoctorsTips/DoctorsTips';
import ContactSection from '../../Components/ContactSection/ContactSection';
import QuickLinks from '../../Components/QuickLinks/QuickLinks';

export default () => {
    return (
        <div className="emergency">
             <SubHeader image = "./Images/emergency.png" heading = "EMERGENCY!" description = "Call Us: 0011/0012" />
             <CovidOverview />
             <NavigationPanel />
             <AvailableDoctors />
             <ContactSection />
             <QuickLinks />
             <DoctorsTips heading="Emergency Health Tips"/>
        </div>
    )
}