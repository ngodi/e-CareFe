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
import MainHeading from '../../Components/Partials/MainHeading/MainHeading';

export default () => {
    return (
        <div className="emergency">
             <MainBanner image = "./Images/emergency.png" heading = "EMERGENCY!" description = "Call Us: 0011/0012" />
             <CovidOverview image="./Images/corona-logo.png" country="INDIA" more="Know More" />
             <SubNav />
             <AvailableDoctors />
             <MainHeading title="Fast Chat Nurses and medical staffs" />
             <ContactSection >
                <div className="contact-side-text">
                <h3>Advices</h3>
                <p>Dentistry is the art of treating, diagnosing, and preventing diseases of the jaws, teeth, and surrounding tissues of our mouth. Dental treatment includes a wide range of dental services. Some of these services are based on correcting problems of the teeth caused mainly by dental decay. Such treatments often involves the use of some kind of dental fillings.</p>
                <div className="adviser">
                    <img src="./Images/drharry.png" alt="..." />
                    <div>
                            <h4>Sister Dorothy</h4>
                            <h5>Vatican Medical College</h5>
                    </div>
                </div>
                </div>
            </ContactSection>
             <QuickLinks />
             <EmergencyNumber />
             <DoctorsTips heading="Emergency Health Tips"/>
        </div>
    )
}