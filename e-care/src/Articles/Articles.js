import React from 'react';

import './Articles.css';

import Header from './Components/Header/Header';
import TopListed from './Components/TopListed/TopListed';
import HealthyLivingList from './Components/HealthyLivingList/HealthyLivingList';
import HealthTipsVideos from './Components/HealthTipsVideos/HealthTipsVideos';
import DoctorsTips from './Components/DoctorsTips/DoctorsTips';

export default () => {
    return (
      <div className="articles">
          <Header />
          <TopListed />
          <HealthyLivingList />
          <HealthTipsVideos />
          <DoctorsTips />
      </div>
    )
}