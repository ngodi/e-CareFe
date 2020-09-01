import React from 'react';

import './Articles.css';

import Header from './Components/Header/Header';
import TopListed from './Components/TopListed/TopListed';

export default () => {
    return (
      <div className="articles">
          <Header />
          <TopListed />
      </div>
    )
}