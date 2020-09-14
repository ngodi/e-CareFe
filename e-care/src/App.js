
import React from "react";
import { Route, Switch, useLocation } from 'react-router-dom';
import * as $ from "jquery";
import "slick-carousel";

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";

import brain from "./Images/carousel-brain.png";
import heart from "./Images/carousel-heart.png";
import orthopaedic from "./Images/carousel-orthopaedic.png";
import robotics from "./Images/carousel-robotics.png";
import pharm from "./Images/carousel-pharm.png";
import article1 from "./Images/article-1.png";
import arcticle2 from "./Images/article-2.png";
import article3 from "./Images/article-3.png";
import healthtips01 from "./Images/healthtips01.png";
import healthtips02 from "./Images/healthtips02.png";
import logo_facebook from "./Images/icons8_facebook.png";
import logo_instagram from "./Images/icons8_instagram.png";
import logo_linkedin from "./Images/icons8_linkedin.png";
import logo_twitter from "./Images/icons8_twitter.png";
import ecare_transp from "./Images/ecare-transparent.png";

import Signin from './Components/Partials/SignUp/MainSignIn'

import HomePage from "./Pages/HomePage/HomePage";
import Booking from "./Components/Booking/Booking";
import Footer from './Components/Partials/Footer/Footer';

import PublicNav from "./Components/Partials/PublicNav/PublicNav";
import Emergency from "./Pages/Emergency/Emergency";
import Articles from "./Pages/Articles/Articles";
import PatientDashboard from "./Components/dashboard/Layout.js/PatientDashboard";



function App() {
  return (
    <div className="App">
      <PublicNav />
      <Route exact path ='/' component={ HomePage } />
      <Route path ='/booking' component={ Booking } />
      <Route path ='/emergency' component={ Emergency } />
      <Route path ='/articles' component={ Articles} />
      <Route path = '/dashboard/patient' component={ PatientDashboard} />
      <Signin />
      <Footer />
    </div>
  );
}

export default App;

