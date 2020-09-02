import React from 'react';

import './Articles.css';

import Header from './Components/Header/Header';
import TopListed from './Components/TopListed/TopListed';
import HealthyLivingList from './Components/HealthyLivingList/HealthyLivingList';

export default () => {
    return (
      <div className="articles">
          <Header />
          <TopListed />
          <HealthyLivingList />
      </div>
    )
}