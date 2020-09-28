import React from "react";
import { Link } from "react-router-dom";

import MainNav from "../MainNav/MainNav";

import "./MainBanner.css";

export default ({ image, heading, description, page }) => {
  return (
    <section
      style={
        page == "covid"
          ? {
              backgroundImage: `
        url(${image})`,
            }
          : {
              backgroundImage: `linear-gradient( rgba(0, 44, 156, 0.58), rgba(0, 44, 156, 0.58)), 
        url(${image})`,
            }
      }
      className="the-height text-white mt-3 d-flex flex-column justify-content-center align-items-center"
    >
      <MainNav />
      <div id="banner-text">
        <h1>{heading}</h1>
        <p>{description}</p>
        {page === "home" ? (
          <div className="hero-mid-text">
            <Link to="/booking">
              <button className="book-now btn btn-danger px-3">Book now</button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <img
        src="./Images/poweredby.png"
        className="poweredby-logo"
        alt="Powered By E-care"
      />
    </section>
  );
};
