
import React from "react";
import { Route, Switch } from 'react-router-dom';
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
import Emergency from "./pages/Emergency/Emergency";


function App() {
  return (
    <div className="App">
      <PublicNav />
      <Route eaxt path ='/' component={ HomePage } />
      <Route path ='/booking' component={ Booking } />
      <Route path ='/emergency' component={ Emergency } />
      <Footer />
    </div>
  );
}

export default App;

