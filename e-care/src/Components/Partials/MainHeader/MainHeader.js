import React, { Component } from "react";
import Logo from "../../../Images/logo.png";

import { Link } from 'react-router-dom';

import './MainHeader.css';

export default class PublicNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <Link to = '/' className="navbar-brand" href="#">
          <img
            className="img-fluid"
            src={Logo}
            alt="e-care brand logo"
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <form className="my-2 my-lg-0">
            <input
              className="form-control mr-sm-2 search-field"
              type="search"
              placeholder="Search for hospital"
            />
          </form>
          <Link to = '/emergency'>
          <button className="btn btn-danger ml-lg-3 mr-auto px-3">
            Emergency call
          </button>
          </Link>
          <ul className="navbar-nav mt-2 mt-lg-0 ">
            <li className="nav-item d-inline-block mx-auto d-lg-inline">
            <button type="button" className="btn-login btn btn-outline-success" data-toggle="modal" data-target="#exampleModalCenter">
                    Login
                </button>
            </li>
            <li
              className="mx-3 d-none d-lg-block"
              style={{
                border: "1px solid #28a745",
              }}
            ></li>
            <li className="nav-item d-inline-block mx-auto d-lg-inline mt-3 mt-lg-0 ">
              <Link to = '/dashboard/patient' className="btn btn-success px-3" href="#" aria-disabled="true">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
