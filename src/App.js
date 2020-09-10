import React from "react";
import { Switch, Route } from "react-router-dom";
import * as $ from "jquery";
import "slick-carousel";
import Home from "./Home";
import PatientDashboard from "./Components/dashboard/PatientDashboard";

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/patientdashboard" component={PatientDashboard} />
        </Switch>
    </>
  );
}

export default App;
