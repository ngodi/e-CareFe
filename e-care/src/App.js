import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import * as $ from "jquery";
import "slick-carousel";

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";

import Signin from "./Components/Partials/SignUp/MainSignIn";

import HomePage from "./Pages/HomePage/HomePage";
import Booking from "./Components/Booking/Booking";
import Footer from "./Components/Partials/Footer/Footer";

import PublicNav from "./Components/Partials/PublicNav/PublicNav";
import Emergency from "./Pages/Emergency/Emergency";
import Articles from "./Pages/Articles/Articles";
import PatientDashboard from "./Components/dashboard/Layout.js/PatientDashboard";
import ContactUs from "./Pages/ContactUs/ContactUs";
import FirstAid from "./Pages/FirstAid/FirstAid";
import FirstAidDetailsPage from "./Pages/FirstAid/FirstAidDetailsPage";
import HospitalDashboard from "./Components/dashboard/Layout.js/HospitalDashboard";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/booking" component={Booking} />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/emergency" component={Emergency} />
      <Route path="/articles" component={Articles} />
      <Route path="/dashboard/patient" component={PatientDashboard} />
      <Route path="/dashboard/hospital" component={HospitalDashboard} />


      <Route exact path="/first-aid" component={FirstAid} />
      <Route path="/first-aid/:word" component={FirstAidDetailsPage} />

      <Signin />
      <Footer />
    </div>
  );
}

export default App;
