import React from 'react';
import { Link } from 'react-router-dom';

import './SubNav.css';

export default () => {
  return(
      <nav className="navigation-panel navbar navbar-expand-md">
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
         <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
        <li className="nav-item">
              <a className="nav-link" href="#">Doctor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hospital</a>
            </li>
           <li className="nav-item">
              <a className="nav-link" href="#">Unit</a>
            </li>
           <li className="nav-item">
              <a className="nav-link" href="#">Emergency</a>
            </li>
           <li className="nav-item">
             <Link className="nav-link" to="our-labs">Laboratory</Link>
           </li>
        </ul>
      </div>
      </nav>
  )
}