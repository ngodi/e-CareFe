import React from "react";
import { Route } from 'react-router-dom';
import * as $ from "jquery";
import "slick-carousel";

// IMPORT ICONS FROM REACT ICONS
import { FcSettings } from "react-icons/fc";
// CUSTOM CSS
import "./App.css";
import "../node_modules/slick-carousel/slick/slick.css";

import HomePage from "./Pages/HomePage/HomePage";
import Footer from './Components/Partials/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Route to='/' component={ HomePage } />
       <Footer />
    </div>
  );
}

export default App;
