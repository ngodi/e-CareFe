import React from 'react';
import CovidOverview from '../Partials/CovidOverview/CovidOverview';

import MainBanner from '../Partials/MainBanner/MainBanner';
import SubNav from '../Partials/SubNav/SubNav';
import LabItem from './LabItem';

import './Laboratories.css';

const slides = [
    {img: "./Images/hero.png", phone:  '+234 - 123-456', address: 'A-23, Lagos, Nigeria'},
    {img: "./Images/hero.png", phone: '+234 - 123-456', address: 'A-23, Lagos, Nigeria'}
  ];
  const tests = ["RBC Test", "WBC Test", "Platelate counts", "RBC Indices"];
export default () => {
    return (
        <div className="laboratories">
             <MainBanner image="./Images/hero.png" heading="Our Laboratories" page="laboratories" />
             <CovidOverview />
             <SubNav />
             <LabItem title="Haematology" slides={slides} tests={tests} />
             <LabItem title="Chemical Pathology" slides={slides} tests={tests} />
             <LabItem title="Micrology" slides={slides} tests={tests} />
             <LabItem title="Radiology" slides={slides} tests={tests} />
        </div>
    )
}