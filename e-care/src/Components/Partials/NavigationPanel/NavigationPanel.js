import React from 'react';

import './NavigationPanel.css';

export default () => {
  return(
      <div className="navigation-panel">
          <a href="#">Doctor</a>
          <a href="#">Hospital</a>
          <a href="#">Unit</a>
          <a href="#">Emergency</a>
          <a href="#">Laboratory</a>
      </div>
  )
}