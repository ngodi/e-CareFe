import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import * as $ from "jquery";
import "slick-carousel";
import Home from "./Home";
import PatientDashboard from "./Components/dashboard/Layout.js/PatientDashboard";
import HospitalDashboard from "./Components/dashboard/Layout.js/HospitalDashboard";

function App() {
  return (
      <Router>
          <Route path="/dashboard/patient" component={PatientDashboard}/>
          <Route  path="/hospital-dashboard" component={HospitalDashboard} />
          <Route exact path="/" component={Home}/>
      </Router>
  );
}

export default App;
