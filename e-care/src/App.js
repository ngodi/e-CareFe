
import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import * as $ from "jquery";
import "slick-carousel";

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";

import HomePage from "./Pages/HomePage/HomePage";
import Booking from "./Components/Booking/Booking";
import Footer from './Components/Partials/Footer/Footer';
import PublicNav from "./Components/Partials/PublicNav/PublicNav";
import Emergency from "./Pages/Emergency/Emergency";
import Articles from "./Pages/Articles/Articles";
import PatientDashboard from "./Components/dashboard/Layout.js/PatientDashboard";


function App() {
  const location = useLocation(); 
  return (
    <div className="App">
      {
        (location.pathname === '/' )? <PublicNav />: ""
      }
      <Route exact path ='/' component={ HomePage } />
      <Route path ='/booking' component={ Booking } />
      <Route path ='/emergency' component={ Emergency } />
      <Route path ='/articles' component={ Articles} />
      <Route path = '/dashboard/patient' component={ PatientDashboard} />
      {
        (location.pathname === '/' )? <Footer />: ""
      }
    </div>
  );
}

export default App;

