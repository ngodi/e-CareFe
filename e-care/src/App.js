import React from "react";
import "slick-carousel";

// CUSTOM CSS
import "./App.css";

// IMPORTING NAVBAR
import PublicNav from "./Components/Partials/PublicNav/PublicNav";
import Footer from "./Components/Partials/Footer/Footer";

// IMPORTING FROM REACT ROUTER DOM
import { Switch, Route } from 'react-router-dom';

// IMPORTING PAGES
import HomePage from "./Page/HomePage/HomePage";



function App() {
  return (
    <div>
      <PublicNav />
      <Route exact path='/' component={HomePage} />
      <Footer />
    </div>
  );
}

export default App;
