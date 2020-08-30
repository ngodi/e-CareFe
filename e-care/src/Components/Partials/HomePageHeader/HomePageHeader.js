import React, { Component } from "react";

// CUSTOM CSS
import "./HomePageHeader.css";

// IMAGE FILES
import logo from '../../../Assets/homepage/Images/the.png';
import image1 from '../../../Assets/homepage/Images/e1.png';
import image2 from '../../../Assets/homepage/Images/e2.png';
import image3 from '../../../Assets/homepage/Images/e3.png';
import image4 from '../../../Assets/homepage/Images/e4.png';

class HomePageHeader extends Component {
  render() {
    return (
      <header className="header">
        <div className="hero-image">
          <ul className="nav justify-content-center pb-3 py-3 hero__top-nav">
            <li className="nav-item">
              <a className="nav-link mr-4 pr-5 text-white" href="#">
                Patient care
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 pr-5 text-white " href="#">
                Doctor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 pr-5 text-white" href="#">
                Hospitals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 pr-5 text-white" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4 pr-5 text-white" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="pt-5 mx-auto text-center mt-5">
            <h1 className='font-weight-bold bb text-white'>Book an appointment</h1>
            <p className='text-white bb2'>Reach out to our doctors or build your appointment right away</p>
            <div className='mt-5'>
              <button className="btn mid px-3">Book now</button>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4 ">
            <p className='pp my-auto text-white'>Powered By</p>
            <img src={logo} alt="transparent" />
          </div>
          <div className="container d-flex align-items-end d-none d-md-block">
            <div className="row mx-auto d-flex justify-content-around mt-5">
              <div>
                <img src={image1} alt="image1" />
                <p className='text-white'>Pharmacy</p>
              </div>

              <div>
                <img src={image2} alt="image2" />
                <p className='text-white'>Diagnostic</p>
              </div>

              <div>
                <img src={image3} alt="image3" />
                <p className='text-white'>Wellness</p>
              </div>

              <div>
                <img src={image4} alt="image4" />
                <p className='text-white'>Healthy Blog</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HomePageHeader;
