
import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import * as $ from "jquery";
import "slick-carousel";

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";

import Signin from './Components/Partials/SignUp/MainSignIn'
import MainHeader from './Components/Partials/MainHeader/MainHeader';
import HomePage from "./Pages/HomePage/HomePage";
import Booking from "./Components/Booking/Booking";
import MainFooter from './Components/Partials/MainFooter/MainFooter';

import Emergency from "./Pages/Emergency/Emergency";
import Articles from "./Pages/Articles/Articles";
import PatientDashboard from "./Components/dashboard/Layout.js/PatientDashboard";
import CovidTracker from "./Components/CovidTracker/CovidTracker";



function App() {
  return (
    <div className="App">
      <MainHeader />
      <Route exact path ='/' component={ HomePage } />
      <Route path ='/booking' component={ Booking } />
      <Route path ='/emergency' component={ Emergency } />
      <Route path ='/articles' component={ Articles} />
      <Route path = '/dashboard/patient' component={ PatientDashboard} />
      <Route path = '/covid' component={ CovidTracker} />
      <Signin />
      <MainFooter />
    </div>
  );
}

export default App;

